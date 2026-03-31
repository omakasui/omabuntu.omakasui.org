# Terminal UIs

Omabuntu ships a set of powerful terminal user interfaces (TUIs) for managing Git, Docker, system resources, and more.

## Lazygit

[Lazygit](https://github.com/jesseduffield/lazygit) is a TUI for Git. Open it from the current directory:

```bash
lzg
```

or use `Ctrl + G` inside Tmux (the Tmux leader), followed by `g` — or the `lazygit` keybinding in the omabuntu-menu.

Key actions inside Lazygit:

| Key     | Action                       |
| ------- | ---------------------------- |
| `Space` | Stage/unstage file or hunk   |
| `c`     | Commit                       |
| `P`     | Push                         |
| `p`     | Pull                         |
| `b`     | Switch branch                |
| `n`     | New branch                   |
| `d`     | Delete branch / discard file |
| `?`     | Show help / full keymap      |

## Lazydocker

[Lazydocker](https://github.com/jesseduffield/lazydocker) is a TUI for Docker. Launch it:

```bash
lzd
```

Useful keys:

| Key | Action              |
| --- | ------------------- |
| `s` | Stop container      |
| `r` | Restart container   |
| `d` | Remove container    |
| `l` | View logs           |
| `e` | Exec into container |
| `?` | Help                |

## Btop

[Btop](https://github.com/aristocratos/btop) is a resource monitor with a clean visual interface. Open it with `Shift + Super + T` or:

```bash
btop
```

It shows CPU, memory, disk, network, and process usage with mouse support.

## Fastfetch

[Fastfetch](https://github.com/fastfetch-cli/fastfetch) shows system info at a glance. It runs automatically at shell startup, and is also accessible as _About_ in the app grid. Run manually:

```bash
fastfetch
```
