# Browsers

Omabuntu ships with Chromium, the plain open-source build, installed as a native APT package from the [XTraDeb](https://launchpad.net/~xtradeb/+archive/ubuntu/apps) PPA rather than a Snap. It's what `Shift + Super + B` opens and what web apps run inside.

## Installing Another One

_Install > Browser_ in the Omabuntu Menu offers Chrome, Edge, Brave, Firefox, and Zen. From the terminal:

```bash
omakub install browser firefox
```

Firefox comes from the Mozilla PPA, pinned so Ubuntu's transitional Snap package can't replace it.

## Making One the Default

Installing a browser doesn't promote it. Go to _Setup > Defaults > Browser_, which lists only browsers you actually have and marks the current one.

```bash
omakub default browser firefox
omakub default browser              # print the current default
```

This sets the XDG handler and the `http`, `https`, and `text/html` associations, so anything that opens a link follows along.

## Configuration

Chromium, Chrome, Edge, and Brave get a flags file that switches them to native Wayland and enables touchpad overscroll for back and forward gestures. They also load the **Copy URL** extension, which puts the current tab's address on the clipboard with `Alt + Shift + L`.

Firefox and Zen get a `policies.json` and native Wayland mode instead, enabling VAAPI hardware video decoding, fractional scaling, and overscroll navigation. They don't get the extension.

### Signing Into a Google Account

The open-source Chromium build doesn't ship the OAuth credentials Google requires, so account sign-in fails out of the box. Run _Install > Service > Chromium Account_, or:

```bash
omakub install chromium google account
```

Restart Chromium afterwards.

## Removing One

_Remove > Browser_, or `omakub remove browser brave`. If it was the default, Omabuntu resets that for you. Chromium is part of the base system and isn't in the list.
