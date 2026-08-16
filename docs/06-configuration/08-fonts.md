# Fonts

Omabuntu uses _Cascadia Mono Nerd Font_ for the terminal and code editor. The system interface keeps Ubuntu's default fonts.

Pick a Nerd Font variant if you switch: the prompt, the Omabuntu Menu, and most TUIs use its glyphs for icons, and a font without them shows boxes.

## Changing the Font

_Style > Font_ in the Omabuntu Menu switches the monospace font, and _Style > Font > Size_ adjusts the size. The change applies to the terminal, Neovim, and the other themed applications at once.

```bash
omakub font list                            # every monospace font on the system
omakub font current
omakub font set "CaskaydiaMono Nerd Font"
omakub font size current
omakub font size set 10
```

## Installing More

_Install > Style > Font_ offers a few well-known families:

| Name             | Font                                             |
| ---------------- | ------------------------------------------------ |
| `jetbrains-mono` | JetBrains Mono                                   |
| `iafonts`        | iA Writer Mono                                   |
| `cascadia-mono`  | Cascadia Mono Nerd Font (the default)            |
| `mscore`         | Microsoft core fonts, for document compatibility |

```bash
omakub install font jetbrains-mono
omakub remove font jetbrains-mono
```

Remove them again from _Remove > Style > Font_.

Any font you drop into `~/.local/share/fonts` shows up in `omakub font list` after `fc-cache -f`.

To run something whenever the font changes, install a `font-set` [hook](/manual/configuration/hooks).
