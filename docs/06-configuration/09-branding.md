# Branding

The boot splash, the login screen, and the About window can all be replaced. Branding files live in `~/.config/omakub/branding/`.

The simplest route is to follow a theme: _Style > Plymouth_ in the Omabuntu Menu, or `omakub plymouth set-by-theme "Tokyo Night"`. See [Themes](/manual/essentials/themes). The rest of this page is for picking colors and logos by hand.

## Boot Splash

Arguments are a background color, a text color, and a PNG logo. Preview writes an image instead of applying:

```bash
omakub plymouth preview '#1d2021' '#ebdbb2' logo.png preview.png
omakub plymouth set '#1d2021' '#ebdbb2' logo.png
omakub plymouth reset
```

Setting the boot splash also syncs the login screen to the same colors and logo.

> [!note]
> Plymouth changes rebuild the initramfs and need `sudo`. On systems with LVM disk encryption the customization is skipped.

## Login Screen

The GDM login screen can be set on its own. The background takes a hex color or an image path:

```bash
omakub gdm set '#1e1e2e' logo.png
omakub gdm set ~/Pictures/wallpaper.png logo.png
omakub gdm reset
```

## About Screen

The About window (_About_ in the Omabuntu Menu) shows system information beside an ASCII logo, read from `~/.config/omakub/branding/about.txt`. Change it under _Style > About_:

- **Edit Text** opens the file in your editor
- **Set From Image** picks a PNG or SVG from `~/Pictures` and converts it to ASCII
- **Restore Default** puts the Omabuntu logo back

From the terminal:

```bash
omakub branding about text
omakub branding about image
omakub branding about reset
```

To tune the conversion, run it yourself:

```bash
omakub transcode ascii ~/logo.svg ~/.config/omakub/branding/about.txt --width 54 --height 26
```

Options: `--width`, `--height`, `--mode braille|block`, `--threshold 0-100`, `--invert`. Braille packs in more detail, block reads better at small sizes.

## Icons

Two images in the same folder can be swapped out: `notify.png` for desktop notifications, and `icon-launcher.png` for the Omabuntu entry in the GNOME top bar.
