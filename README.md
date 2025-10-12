# ["Simple" Wedding Website](https://matthewandmaria.com/en/)

This started out as a simple bilingual (Portuguese/English) Bootstrap website for our wedding, but it is now fairly complex. It probably doesn't make sense to use any part of this for your own wedding website, but you might find some if it useful/educational.

## Commands to generate video preview animations and fallback thumbnails

These commands generate the animated thumbnails on the [album page](https://matthewandmaria.com/en/album).

```bash
# Generate video preview animations (AVIF format, 400px width, 20fps, 5 seconds duration)
ffmpeg -i "./maria_fernanda_e_matthew_1-_same_day_edit (1080p).mp4" -ss 14 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an cdf433e4-6af0-4695-8a14-60ea631b3996.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_2 (1080p).mp4" -ss 14 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an 54ccf4ea-4d46-4b46-b9c8-6083a5e07cb6.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_3 (1080p).mp4" -ss 3 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an 2b0884bb-5d40-4404-8533-4f73b3be870d.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_4 (1080p).mp4" -ss 3 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an b4b2d99d-8522-4c4a-acd6-90a755256161.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_5 (1080p).mp4" -ss 15.5 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an 95af1da0-8a35-46d1-9467-e510c3ad2235.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_6 (1080p).mp4" -ss 1 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an c666f123-e1c5-4cad-8329-1a542d04e5a9.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_7 (1080p).mp4" -ss 10 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an 7726645d-5e58-4010-af96-ae06bd20505d.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_8 (1080p).mp4" -ss 0 -t 5 -vf "fps=fps=20,scale=400:-1" -loop 0 -c:v libaom-av1 -an 3ad39180-5c11-4d61-bb9f-ef93d1f99bf6.jpg.avif

# Generate fallback video thumbnails (JPEG format, 400px width, single frame)
ffmpeg -i "./maria_fernanda_e_matthew_1-_same_day_edit (1080p).mp4" -ss 14 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 cdf433e4-6af0-4695-8a14-60ea631b3996.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_2 (1080p).mp4" -ss 14 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 54ccf4ea-4d46-4b46-b9c8-6083a5e07cb6.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_3 (1080p).mp4" -ss 3 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 2b0884bb-5d40-4404-8533-4f73b3be870d.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_4 (1080p).mp4" -ss 3 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 b4b2d99d-8522-4c4a-acd6-90a755256161.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_5 (1080p).mp4" -ss 15.5 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 95af1da0-8a35-46d1-9467-e510c3ad2235.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_6 (1080p).mp4" -ss 1 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 c666f123-e1c5-4cad-8329-1a542d04e5a9.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_7 (1080p).mp4" -ss 10 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 7726645d-5e58-4010-af96-ae06bd20505d.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_8 (1080p).mp4" -ss 0 -skip_frame nokey -vf "scale=400:-1" -frames:v 1 -an -quality 85 3ad39180-5c11-4d61-bb9f-ef93d1f99bf6.jpg
```
