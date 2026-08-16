# Defaults

## Browser, Editor, and Terminal

Three commands set the applications the rest of the system hands work off to. Run any of them with no arguments to print the current value.

```bash
omakub default browser firefox
omakub default editor code
omakub default terminal ghostty
```

| Command                   | Accepts                                                 | Affects                                                            |
| ------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| `omakub default browser`  | `chromium`, `chrome`, `brave`, `edge`, `firefox`, `zen` | `xdg-settings`, plus the `http`, `https`, and `text/html` handlers |
| `omakub default editor`   | `code`, `cursor`, `zed`, `vim`, `emacs`, `nvim`         | `EDITOR` and `SUDO_EDITOR`                                         |
| `omakub default terminal` | `alacritty`, `ghostty`, `kitty`                         | `xdg-terminal-exec`, which is what `Super + Return` calls          |

The same options are under _Setup > Defaults_ in the Omabuntu Menu, which lists only the applications actually installed and marks the current one.

Changing the editor or terminal takes effect in new shells. Restart the terminal to pick it up.

To install one first, use `omakub install browser <name>`, `omakub install terminal <name>`, or the _Install_ menu. `omakub remove browser <name>` uninstalls a browser and resets the default if it was the one selected.

## DNS

```bash
omakub setup dns              # choose interactively
omakub setup dns Cloudflare
```

Options are `Cloudflare` (1.1.1.1, DNS over TLS), `Google` (8.8.8.8), `DHCP` to hand resolution back to your network, and `Custom` to enter your own servers.

Picking anything other than `DHCP` also stops DHCP from overriding your choice on reconnect. Also at _Setup > DNS_ in the Omabuntu Menu.

To replace the About screen, the boot splash, or the login screen, see [Branding](/manual/configuration/branding).
