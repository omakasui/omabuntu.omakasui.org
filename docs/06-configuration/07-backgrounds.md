# Backgrounds

Each theme ships its own set of background images. Cycle through them with `Super + Ctrl + Space`, or pick one from _Style > Background_ in the Omabuntu Menu, which shows a preview of each image.

## Adding Your Own

Your images live in `~/.config/omakub/backgrounds/[theme]`. To add one to the _nord_ theme, drop the file into `~/.config/omakub/backgrounds/nord`. It joins the rotation immediately.

The easiest way to reach the right folder is _Install > Style > Background_, which opens the folder for the active theme in the file manager. From there, open a second window with `Super + Shift + F` and copy your image in.

Recognized formats: `jpg`, `jpeg`, `png`, `gif`, `bmp`, `webp`.

## Setting One Directly

```bash
omakub theme bg set ~/Pictures/wallpaper.jpg
omakub theme bg set ~/Pictures/wallpaper.jpg center   # zoom, center, stretch, fill, fit, spanned
omakub theme bg next
```

If you're looking for high-quality wallpapers, a large curated collection is available in the [dharmx/walls repository](https://github.com/dharmx/walls) on GitHub.
