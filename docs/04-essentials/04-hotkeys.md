# Hotkeys

A carefully crafted set of keyboard shortcuts is included with Omabuntu to enhance your productivity. These shortcuts are set up automatically during installation and remain fully customizable afterward.

> Many of these shortcuts are inspired by and derived from the [Omakub](https://learn.omacom.io/1/read/29/hotkeys/) and the [Omarchy](https://learn.omacom.io/2/the-omarchy-manual/53/hotkeys) configurations. Omabuntu builds upon this foundation with additional customizations.

## Window Management

> [!note]
> Omabuntu uses 6 fixed workspaces instead of dynamic mode for better organization.

| Hotkey                              | Action                                 |
| ----------------------------------- | -------------------------------------- |
| `Super` + `Space`                   | Applications launcher / Input source   |
| `Super` + `A`                       | See all applications (app grid)        |
| `Super` + `Alt` + `Space`           | Omabuntu control menu                  |
| `Super` + `Escape`                  | Lock/suspend/restart/shutdown computer |
| `Super` + `W`                       | Close window                           |
| `Super` + `1-6`                     | Jump to workspace 1-6                  |
| `Shift` + `Super` + `1-6`           | Move window/app to workspace 1-6       |
| `Alt` + `1-9`                       | Jump to dock app                       |
| `Shift` + `Super` + `Space`         | Switch input source                    |
| `Shift` + `Super` + `Alt` + `Space` | Switch input source (backward)         |

## Tiling

| Hotkey                       | Action                                                    |
| ---------------------------- | --------------------------------------------------------- |
| `F11`                        | Fullscreen                                                |
| `Shift` + `F11`              | Fullscreen with title bar                                 |
| `Super` + `Left/Right Arrow` | Fill left/right half                                      |
| `Super` + `Up Arrow`         | Fill full screen                                          |
| `Super` + `T`                | Tiling overlay (Tactile)                                  |
| `Super` + `Control` + `T`    | Tiling settings (Tactile)                                 |
| `Alt` + `Space`              | Reveal options (including Undecorate to remove title bar) |

## Application Window

| Hotkey          | Action                                                    |
| --------------- | --------------------------------------------------------- |
| `Super` + `W`   | Close window/application                                  |
| `Alt` + `Space` | Reveal options (including Undecorate to remove title bar) |

## Launching Apps

| Hotkey                          | Action                          |
| ------------------------------- | ------------------------------- |
| `Super` + `Return`              | Terminal                        |
| `Control` + `Alt` + `T`         | Terminal                        |
| `Super` + `Alt` + `Return`      | Terminal with Tmux session      |
| `Shift` + `Super` + `B`         | Web Browser                     |
| `Shift` + `Super` + `Return`    | Web Browser                     |
| `Shift` + `Super` + `Alt` + `B` | Web Browser (private/incognito) |
| `Shift` + `Super` + `F`         | File Manager                    |
| `Shift` + `Super` + `T`         | Activity (btop)                 |
| `Shift` + `Super` + `M`         | Music (spotify)                 |
| `Shift` + `Super` + `N`         | Editor (neovim)                 |
| `Shift` + `Super` + `D`         | Docker (lazydocker)             |

## Capture

| Hotkey                     | Action                              |
| -------------------------- | ----------------------------------- |
| `Print Screen`             | Screenshot (default)                |
| `Control` + `Print Screen` | Screenshot with editing (Flameshot) |

## Style

| Hotkey                                  | Action                          |
| --------------------------------------- | ------------------------------- |
| `Shift` + `Super` + `Control` + `Space` | Omabuntu Theme Menu             |
| `Super` + `Control` + `Space`           | Next background image for theme |

Extra background images live in `~/.config/omakub/current/backgrounds`. You can put more there to cycle through. Also available via _Install > Style > Background_ in the Omabuntu menu.

All style options are also accessible under Style in the Omabuntu menu (`Super + Alt + Space`).

## Toggles

| Hotkey                    | Action                                |
| ------------------------- | ------------------------------------- |
| `Super` + `Control` + `N` | Toggle nightlight display temperature |

## Terminal (Tmux)

Tmux is preconfigured with `Ctrl + Space` as the prefix key (`Ctrl + B` also works as a secondary prefix). After pressing the prefix, press the action key.

| Hotkey                                | Action                  |
| ------------------------------------- | ----------------------- |
| `Prefix` + `v`                        | Split pane vertically   |
| `Prefix` + `h`                        | Split pane horizontally |
| `Control` + `Alt` + `Arrow`           | Navigate panes          |
| `Control` + `Alt` + `Shift` + `Arrow` | Resize pane             |
| `Prefix` + `x`                        | Close pane              |
| `Prefix` + `c`                        | New window              |
| `Prefix` + `r`                        | Rename window           |
| `Prefix` + `k`                        | Close window            |
| `Alt` + `1-9`                         | Switch to window 1-9    |
| `Alt` + `Left/Right`                  | Previous/next window    |
| `Alt` + `Shift` + `Left/Right`        | Move window left/right  |
| `Prefix` + `C`                        | New session             |
| `Prefix` + `R`                        | Rename session          |
| `Prefix` + `K`                        | Close session           |
| `Alt` + `Up/Down`                     | Previous/next session   |
| `Prefix` + `q`                        | Reload configuration    |

See the [Tmux documentation](https://github.com/tmux/tmux/wiki) to learn all the keybindings.

## Terminal (Zellij)

| Hotkey                          | Action                    |
| ------------------------------- | ------------------------- |
| `Control` + `G` + `P` + `R`     | New vertical pane         |
| `Control` + `G` + `P` + `D`     | New horizontal pane       |
| `Alt` + `Arrow`                 | Navigate panes (and tabs) |
| `Alt` + `=`                     | Expand pane               |
| `Alt` + `-`                     | Shrink pane               |
| `Control` + `G` + `T` + `N`     | New tab                   |
| `Control` + `G` + `T` + `R`     | Rename tab                |
| `Control` + `G` + `O` + `D`     | Suspend session           |
| `Control` + `G` + `O` + `W`     | Resume session            |
| `Control` + `G` + `S` + `E`     | Edit scroll history       |
| `Control` + `R`                 | Reveal command history    |
| `Control` + `G` + `R` + `Arrow` | Resize pane               |

See the [Zellij manual](https://zellij.dev/documentation/keybinding-presets) to learn all the keybindings.

## File Manager

| Hotkey          | Action                         |
| --------------- | ------------------------------ |
| `Control` + `L` | Focus location bar             |
| `Space`         | Preview file (arrows navigate) |
| `Backspace`     | Go back one folder             |

## Apple Display Brightness Control

When the optional ASDControl is installed:

| Hotkey                     | Action                        |
| -------------------------- | ----------------------------- |
| `Control` + `F1`           | Turn down brightness          |
| `Control` + `F2`           | Turn up brightness            |
| `Shift` + `Control` + `F2` | Turn up brightness to maximum |

## Neovim

### Navigation

| Hotkey                         | Action                          |
| ------------------------------ | ------------------------------- |
| `Space`                        | Show command options            |
| `Space` + `Space`              | Open file via fuzzy search      |
| `Space` + `E`                  | Toggle sidebar                  |
| `Space` + `G` + `G`            | Show git controls               |
| `Space` + `S` + `G`            | Search file content             |
| `Control` + `W` + `W`          | Jump between sidebar and editor |
| `Control` + `Left/Right Arrow` | Change size of sidebar          |
| `Shift` + `H`                  | Go to left file tab             |
| `Shift` + `L`                  | Go to right file tab            |
| `Space` + `B` + `D`            | Close file tab                  |

### While in sidebar

| Hotkey        | Action                       |
| ------------- | ---------------------------- |
| `A`           | Add new file in parent dir   |
| `Shift` + `A` | Add new subdir in parent dir |
| `D`           | Delete highlighted file/dir  |
| `M`           | Move highlighted file/dir    |
| `R`           | Rename highlighted file/dir  |
| `?`           | Show help for all commands   |

See all the [Neovim hotkeys](https://www.lazyvim.org/keymaps) configured by LazyVim.

## Quick Emojis

| Hotkey                 | Emoji | Clue       |
| ---------------------- | ----- | ---------- |
| `CapsLock` + `M` + `S` | 😄    | smile      |
| `CapsLock` + `M` + `C` | 😂    | cry        |
| `CapsLock` + `M` + `L` | 😍    | love       |
| `CapsLock` + `M` + `V` | ✌️    | victory    |
| `CapsLock` + `M` + `H` | ❤️    | heart      |
| `CapsLock` + `M` + `Y` | 👍    | yes        |
| `CapsLock` + `M` + `N` | 👎    | no         |
| `CapsLock` + `M` + `F` | 🖕    | fuck       |
| `CapsLock` + `M` + `W` | 🤞    | wish       |
| `CapsLock` + `M` + `R` | 🤘    | rock       |
| `CapsLock` + `M` + `K` | 😘    | kiss       |
| `CapsLock` + `M` + `E` | 🙄    | eyeroll    |
| `CapsLock` + `M` + `P` | 🙏    | pray       |
| `CapsLock` + `M` + `D` | 🤤    | drool      |
| `CapsLock` + `M` + `M` | 💰    | money      |
| `CapsLock` + `M` + `X` | 🎉    | xellebrate |
| `CapsLock` + `M` + `1` | 💯    | 100%       |
| `CapsLock` + `M` + `T` | 🥂    | toast      |
| `CapsLock` + `M` + `O` | 👌    | ok         |
| `CapsLock` + `M` + `G` | 👋    | greeting   |
| `CapsLock` + `M` + `A` | 💪    | arm        |
| `CapsLock` + `M` + `B` | 🤯    | blowing    |

## Quick Completions

| Hotkey                         | Completion                       |
| ------------------------------ | -------------------------------- |
| `CapsLock` + `Space` + `Space` | `—` (mdash)                      |
| `CapsLock` + `Space` + `N`     | Your name (as entered on setup)  |
| `CapsLock` + `Space` + `E`     | Your email (as entered on setup) |

You can add more of your own by editing `~/.XCompose`, then running `omakub-restart-xcompose` in the terminal to get the changes picked up.
