# FAQ

For errors and broken things, see [Troubleshooting](/manual/setup/troubleshooting).

## Why isn't Caps Lock working?

In Omabuntu, Caps Lock is the compose key. That's how [quick emojis](/manual/essentials/hotkeys) and the text completions work.

To get Caps Lock back, remap the compose key to something else:

```bash
gsettings set org.gnome.desktop.input-sources xkb-options "['compose:ralt']"
```

That moves it to the right Alt key. Any [xkb compose option](https://man.archlinux.org/man/xkeyboard-config.7) works in its place.

## Why can't I sign into my Google account in Chromium?

The plain open-source Chromium build doesn't ship the OAuth credentials Google requires. Run _Install > Service > Chromium Account_ in the Omabuntu Menu, then restart the browser. See [Browsers](/manual/applications/browsers).

## How do I get rid of all the extra software?

Run _Remove > Package_ to browse everything installed, select what you want gone with `Tab`, and confirm with `Enter`.

_Remove > Web App_ removes preinstalled web apps, and _Remove > TUI_ the terminal app launchers.

To sweep out the preinstalled extras in one go, use _Remove > Preinstalls_. It removes the web apps, the TUI wrappers, the AI command wrappers, and the optional desktop applications together.

## How do I change the default terminal, editor, or browser?

_Setup > Defaults_ in the Omabuntu Menu, or `omakub default terminal ghostty`. See [Defaults](/manual/configuration/defaults).

## How do I change my DNS?

_Setup > DNS_ in the Omabuntu Menu, or `omakub setup dns Cloudflare`. See [Defaults](/manual/configuration/defaults).

## Where did my Desktop, Templates, and Public folders go?

Omabuntu removes them and points those XDG directories at your home folder. They collect clutter and nothing in Omabuntu uses them.

The file manager sidebar is set up with Downloads, Projects, Pictures, and Videos instead. Edit `~/.config/gtk-3.0/bookmarks` to change that, or drag a folder onto the sidebar.

## Why do I have to reboot after installing?

A few settings only apply to processes started by systemd at boot, most notably the raised file descriptor limit that keeps dev servers, editors, and databases from running out of handles.

## How do I add a printer?

Printing works out of the box and a printer on your network is usually discovered already. Open _Settings > Printers_ to see what's there or add one by hand. Printing to PDF works without any printer at all.

## Can I still use Zellij?

Omabuntu no longer installs it, but the package is still published:

```bash
sudo apt install omakub-zellij
```

Tmux is what the configuration, hotkeys, and layout functions are built around. See [Terminal](/manual/applications/terminal).
