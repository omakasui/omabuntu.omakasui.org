# Extra Hotkeys

Omabuntu registers custom GNOME shortcuts through two commands, so there is no need to edit configuration files by hand.

```bash
omakub gnome keybinding add <name> <command> <keybinding>
omakub gnome keybinding drop <name>
```

For example:

```bash
omakub gnome keybinding add "Notes" "obsidian" "<Super><Control>o"
omakub gnome keybinding drop "Notes"
```

Run `omakub gnome keybinding add` with no arguments to be prompted for the three values interactively.

Adding a shortcut that reuses an existing key combination replaces the old one. Removing is by name, not by key combination.

> [!note]
> Custom keybindings are reset by _Update > Config > Keybindings_ in the Omabuntu Menu, which restores the Omabuntu defaults.
