# ["Simple" Wedding Website](https://matthewandmaria.com/en/)

This started out as a simple bilingual (Portuguese/English) Bootstrap website for our wedding, but it is now fairly complex. It probably doesn't make sense to use any part of this for your own wedding website, but you might find some if it useful/educational.

## Commands to generate video preview animations and fallback thumbnails

These commands generate the animated thumbnails on the [album page](https://matthewandmaria.com/en/album).

```bash
# Generate video preview animations (AVIF format, 400px width, 20fps, 5 seconds duration)
ffmpeg -i "./maria_fernanda_e_matthew_1-_same_day_edit (1080p).mp4" -ss 15   -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an eae0478f-242d-4d37-a024-bfa1dc551909.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_2 (1080p).mp4"              -ss 14   -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an ec1f0219-e954-4654-a9ea-5c21e358cc1d.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_3 (1080p).mp4"              -ss 3    -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 14776d79-be6e-4681-af7b-b11de0332c84.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_4 (1080p).mp4"              -ss 3    -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 050b0c3d-f3e9-4423-8109-f32ccab60f0f.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_5 (1080p).mp4"              -ss 15.5 -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 99db335d-e048-487a-8aad-7bf2f33a37ee.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_6 (1080p).mp4"              -ss 1    -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 4ce971eb-1c75-4440-b167-ea2d37a22a31.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_7 (1080p).mp4"              -ss 10   -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 8a395124-c6c9-4892-a9b3-9149cef5a1e0.jpg.avif
ffmpeg -i "./maria_fernanda_e_matthew_-_8 (1080p).mp4"              -ss 0    -t 5 -vf "fps=fps=20,scale=480:270" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 3a09980c-8d1c-41a4-9dc3-120cd5ae4d66.jpg.avif
ffmpeg -i "./Video by baccarellielizetecosta [DMmAY7uMPnD].mp4"     -ss 108  -t 5 -vf "fps=fps=20,scale=360:640" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an c3122260-1603-4781-b0bc-e2548e877639.jpg.avif
ffmpeg -i "./Video by baccarellielizetecosta [DMnX8DVM1Mu].mp4"     -ss 11   -t 5 -vf "fps=fps=20,scale=360:640" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 2e014771-c98b-4d50-b5e3-cc3fa807bb5b.jpg.avif
ffmpeg -i "./Video by baccarellielizetecosta [DMnZAsosAU2].mp4"     -ss 47   -t 5 -vf "fps=fps=20,scale=360:640" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 0a0280a6-7712-4ce8-a24d-68679bfa1716.jpg.avif
ffmpeg -i "./Video by baccarellielizetecosta [DMnaz0EMawX].mp4"     -ss 9    -t 5 -vf "fps=fps=20,scale=360:640" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an 3d954e2a-3eec-4e9f-b6be-5169e28bea7c.jpg.avif
ffmpeg -i "./Video by baccarellielizetecosta [DMnd1xaMp3e].mp4"     -ss 10   -t 5 -vf "fps=fps=20,scale=360:640" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an c9bc0e6c-6049-4275-9b01-0f783185abe0.jpg.avif
ffmpeg -i "./Video by baccarellielizetecosta [DMngDtTMjOd].mp4"     -ss 45   -t 5 -vf "fps=fps=20,scale=360:640" -loop 0 -c:v libsvtav1 -preset 5 -svtav1-params fast-decode=1 -b:v 64k -an c2828f69-dff9-4b5e-bbf3-9fed2ca45a46.jpg.avif

# Generate fallback video thumbnails (JPEG format, 400px width, single frame)
ffmpeg -i "./maria_fernanda_e_matthew_1-_same_day_edit (1080p).mp4" -ss 15   -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an eae0478f-242d-4d37-a024-bfa1dc551909.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_2 (1080p).mp4"              -ss 14   -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an ec1f0219-e954-4654-a9ea-5c21e358cc1d.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_3 (1080p).mp4"              -ss 3    -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an 14776d79-be6e-4681-af7b-b11de0332c84.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_4 (1080p).mp4"              -ss 3    -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an 050b0c3d-f3e9-4423-8109-f32ccab60f0f.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_5 (1080p).mp4"              -ss 15.5 -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an 99db335d-e048-487a-8aad-7bf2f33a37ee.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_6 (1080p).mp4"              -ss 1    -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an 4ce971eb-1c75-4440-b167-ea2d37a22a31.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_7 (1080p).mp4"              -ss 10   -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an 8a395124-c6c9-4892-a9b3-9149cef5a1e0.jpg
ffmpeg -i "./maria_fernanda_e_matthew_-_8 (1080p).mp4"              -ss 0    -vf "scale=480:270,select='eq(pict_type,I)'" -frames:v 1 -an 3a09980c-8d1c-41a4-9dc3-120cd5ae4d66.jpg
ffmpeg -i "./Video by baccarellielizetecosta [DMmAY7uMPnD].mp4"     -ss 108  -vf "scale=360:640,select='eq(pict_type,I)'" -frames:v 1 -an c3122260-1603-4781-b0bc-e2548e877639.jpg
ffmpeg -i "./Video by baccarellielizetecosta [DMnX8DVM1Mu].mp4"     -ss 13   -vf "scale=360:640,select='eq(pict_type,I)'" -frames:v 1 -an 2e014771-c98b-4d50-b5e3-cc3fa807bb5b.jpg
ffmpeg -i "./Video by baccarellielizetecosta [DMnZAsosAU2].mp4"     -ss 47   -vf "scale=360:640,select='eq(pict_type,I)'" -frames:v 1 -an 0a0280a6-7712-4ce8-a24d-68679bfa1716.jpg
ffmpeg -i "./Video by baccarellielizetecosta [DMnaz0EMawX].mp4"     -ss 9    -vf "scale=360:640,select='eq(pict_type,I)'" -frames:v 1 -an 3d954e2a-3eec-4e9f-b6be-5169e28bea7c.jpg
ffmpeg -i "./Video by baccarellielizetecosta [DMnd1xaMp3e].mp4"     -ss 10   -vf "scale=360:640,select='eq(pict_type,I)'" -frames:v 1 -an c9bc0e6c-6049-4275-9b01-0f783185abe0.jpg
ffmpeg -i "./Video by baccarellielizetecosta [DMngDtTMjOd].mp4"     -ss 45   -vf "scale=360:640,select='eq(pict_type,I)'" -frames:v 1 -an c2828f69-dff9-4b5e-bbf3-9fed2ca45a46.jpg
```
