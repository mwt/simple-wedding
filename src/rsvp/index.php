<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    # Check if the "guest" field is empty
    if (empty($_POST["guest"])) {
        die("No guest information provided!");
    }

    # Open file "rsvp.csv" in append mode and get a lock
    $file = fopen("rsvp.csv", "a");
    if (flock($file, LOCK_EX)) {
        $file_size = fstat($file)['size'];

        # Write the header if the file is empty
        if ($file_size == 0) {
            fputcsv($file, ["ID", "Date", "Name", "Attendance", "Email"]);
        }

        # Create an ID using the file size
        $id = base_convert(intdiv($file_size, 30), 10, 36);

        # Loop through the guests and write them to the file
        # current datetime
        foreach ($_POST["guest"] as $i => $guest) {
            fputcsv($file, [$id . "-" . $i, date("Y-m-d H:i:s"), $guest["name"], $guest["attend"], $_POST["email"]]);
        }

        # Release the lock and close the file
        flock($file, LOCK_UN);
        fclose($file);
    } else {
        die("Unable to submit the form. Please try again!");
    }

    # Include the success template
    include "templates/success.html";
} else {

    if (empty($_GET["p"])) {
        $people = [""];
        # else if it is a string
    } else if (is_string($_GET["p"])) {
        # Split the string by commas
        $people = explode(",", $_GET["p"]);

        # If number of people is greater than 50, return an error
        if (count($people) > 50) {
            die("Too many people!");
        }
    } else {
        # Return an error if the input is not a string
        die("Invalid input!");
    }

    # Include the form template
    include "templates/form.php";
}
