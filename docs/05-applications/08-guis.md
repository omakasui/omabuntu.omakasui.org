# GUI Applications

Omabuntu installs a curated set of GUI applications out of the box, with more available via the Omabuntu Menu.

## Files

**Nautilus** is the file manager. `Shift + Super + F` opens it. `Ctrl + L` lets you type a path, and `Space` on any file gives a quick preview without opening it (via GNOME Sushi).

Double-clicking follows sensible defaults: images open in imv, video in mpv, PDFs in mupdf, plain text in Neovim.

Plug in a USB stick or SD card and it's mounted automatically. For anything more involved, like formatting a drive or checking SMART health, launch **Disks** from the app grid (`Super + A`).

Two Omabuntu actions are added to the right-click menu:

- **Send with LocalSend** hands the file or folder to [LocalSend](/manual/applications/desktop-tools) for transfer to another device
- **Transcode** converts a picture or video to another format and resolution

Omabuntu also sets Nautilus to open your default terminal from the _Open in Terminal_ entry, rather than GNOME Terminal.

## Media Viewers

**imv** is a lightweight image viewer. Open an image from the terminal with `imv photo.jpg`, or associate it with image files in the file manager.

| Hotkey                 | Action                                 |
| ---------------------- | -------------------------------------- |
| `Ctrl` + `P`           | Print the current image                |
| `Ctrl` + `R`           | Rotate 90 degrees                      |
| `Ctrl` + `E`           | Edit in Satty and quit                 |
| `Ctrl` + `X`           | Move to Trash and quit                 |
| `Ctrl` + `Shift` + `X` | Move to Trash and go to the next image |

**mpv** is a media player for video and audio. Open files from the terminal or the file manager. Keyboard shortcuts: `Space` to pause, arrow keys to seek, `f` for fullscreen, `q` to quit.

## Screenshot and Screen Recording

**Flameshot** handles screenshots. The default hotkey is `Ctrl + Print Screen`, which opens the interactive capture overlay. Annotate, crop, and copy or save from there.

GNOME's built-in screen recorder is available via `Ctrl + Shift + Alt + R`. Recordings are saved as `.webm` to `~/Videos/`. Convert them with `omakub transcode`, or press `Super + Ctrl + .` and pick the file.

## Office and Documents

**LibreOffice** is the default office suite, covering word processing, spreadsheets, presentations, and more.

**Xournal++** is a note-taking app ideal for annotating PDFs with a stylus or mouse.

**mupdf** is a fast, minimal PDF and document viewer. Open files from the terminal: `mupdf file.pdf`.

## GNOME Utilities

**GNOME Tweaks** lets you fine-tune GNOME settings not exposed in the standard preferences: fonts, window actions, startup applications, and theme overrides.

**GNOME Sushi** adds quick-look previews to the file manager: press `Space` on a file to preview it without opening it.
