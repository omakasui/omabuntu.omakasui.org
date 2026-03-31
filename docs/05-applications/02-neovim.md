# Neovim

[Neovim](https://neovim.io) is Omabuntu's default text editor, shipped and configured via the `omakub-nvim` package from the Omakasui repository. It comes pre-configured with [LazyVim](https://www.lazyvim.org) as the plugin framework, giving you a feature-rich IDE-like environment out of the box.

Launch Neovim from the hotkey `Shift + Super + N`, or by typing `n` (aliased to `nvim`) in the terminal.

Neovim is integrated with the theme system: theme changes applied from the Omabuntu Menu automatically update the Neovim colorscheme as well.

## Navigation

| Hotkey                        | Action                          |
| ----------------------------- | ------------------------------- |
| `Space`                       | Show command palette            |
| `Space` + `Space`             | Open file via fuzzy search      |
| `Space` + `E`                 | Toggle file sidebar             |
| `Space` + `G G`               | Git controls (Lazygit)          |
| `Space` + `S G`               | Search file content             |
| `Ctrl` + `W W`                | Jump between sidebar and editor |
| `Ctrl` + `Left/Right Arrow`   | Resize sidebar                  |
| `Shift` + `H` / `Shift` + `L` | Previous/next file tab          |
| `Space` + `B D`               | Close file tab                  |

## Sidebar

| Hotkey        | Action                       |
| ------------- | ---------------------------- |
| `A`           | New file in parent directory |
| `Shift` + `A` | New subdirectory             |
| `D`           | Delete file or directory     |
| `M`           | Move file or directory       |
| `R`           | Rename file or directory     |
| `?`           | Show all commands            |

For a complete reference of LazyVim keybindings, see [lazyvim.org/keymaps](https://www.lazyvim.org/keymaps).

## Configuration

Neovim's configuration is managed via `omakub-nvim`. To customize it, edit the files in `~/.config/nvim/`. The LazyVim plugin system makes it easy to add, remove, or override plugins and settings without touching the base configuration.
