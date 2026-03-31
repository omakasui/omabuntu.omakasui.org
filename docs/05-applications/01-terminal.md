# Terminal

Omabuntu's default terminal is [Alacritty](https://alacritty.org), a GPU-accelerated terminal emulator that is fast, minimal, and fully theme-aware. Inside it, two terminal multiplexers are available: **Tmux** (primary) and **Zellij**.

## Alacritty

Alacritty is configured without the system titlebar for a cleaner look, especially in combination with Omabuntu's themes. Since there's no titlebar to drag, hold `Super` and click-drag anywhere in the window to move it. To resize with the mouse, use `Alt + Space > Resize`.

Font and size can be changed from the Omabuntu Menu under _Style > Font_ or by editing `~/.config/alacritty/alacritty.toml` — leave the referenced imports intact so Omabuntu can continue to theme it.

### Alternative Terminals

Omabuntu supports switching to [Ghostty](https://ghostty.org) or [Kitty](https://sw.kovidgoyal.net/kitty/) as alternatives, both fully integrated with the theme system. Install and switch via _Install > Terminal_ in the Omabuntu Menu.

## Tmux

Tmux is Omabuntu's primary terminal multiplexer. The `t` alias attaches to an existing session or creates a new one. Launch a Tmux terminal directly with `Super + Alt + Return`.

Tmux is pre-configured with `Ctrl + Space` as the prefix key (`Ctrl + B` also works).

### Panes

| Hotkey                             | Action                  |
| ---------------------------------- | ----------------------- |
| `Prefix` + `v`                     | Split pane vertically   |
| `Prefix` + `h`                     | Split pane horizontally |
| `Prefix` + `x`                     | Close pane              |
| `Prefix` + `z`                     | Toggle pane zoom        |
| `Ctrl` + `Alt` + `Arrow`           | Navigate between panes  |
| `Ctrl` + `Alt` + `Shift` + `Arrow` | Resize pane             |

### Windows

| Hotkey               | Action               |
| -------------------- | -------------------- |
| `Prefix` + `c`       | New window           |
| `Prefix` + `k`       | Close window         |
| `Prefix` + `r`       | Rename window        |
| `Alt` + `1–9`        | Go to window         |
| `Alt` + `Left/Right` | Previous/next window |

### Sessions

| Hotkey         | Action        |
| -------------- | ------------- |
| `Prefix` + `C` | New session   |
| `Prefix` + `K` | Kill session  |
| `Prefix` + `d` | Detach        |
| `Prefix` + `s` | List sessions |

For Tmux layout functions like `tdl`, `tdlm`, and `tsl`, see [Shell Functions](/manual/applications/shell-functions).

## Zellij

[Zellij](https://zellij.dev) is available alongside Tmux and is Omakub's primary multiplexer. Omabuntu ships `omakub-zellij`, a custom-packaged version kept up to date via the Omakasui repository.

### Tabs and Panes

| Hotkey           | Action                  |
| ---------------- | ----------------------- |
| `Ctrl` + `G T N` | New tab                 |
| `Ctrl` + `G T R` | Rename tab              |
| `Ctrl` + `G P R` | New pane (right)        |
| `Ctrl` + `G P D` | New pane (below)        |
| `Ctrl` + `G P W` | Floating pane (toggle)  |
| `Alt` + `Arrow`  | Navigate panes and tabs |

### Sessions

| Hotkey           | Action           |
| ---------------- | ---------------- |
| `Ctrl` + `G O D` | Save and detach  |
| `Ctrl` + `G O W` | Resume a session |

See the [Zellij documentation](https://zellij.dev/documentation/) for the full keybinding reference.
