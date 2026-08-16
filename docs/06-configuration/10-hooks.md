# Hooks

Hooks let you run your own script when Omabuntu does something. They are plain executable files, in any language.

| Hook          | Runs when                 | Receives       |
| ------------- | ------------------------- | -------------- |
| `theme-set`   | A theme is applied        | The theme name |
| `font-set`    | The monospace font is set | The font name  |
| `post-update` | An update has finished    | Nothing        |

## Adding a Hook

Hooks live in `~/.config/omakub/hooks/<hook>.d/`. Every executable file in there runs, in alphabetical order, and files ending in `.sample` are skipped.

```bash
omakub hook install theme-set ~/my-theme-script
```

A hook that fails prints a message but does not stop the operation that triggered it.

## Example

`~/.config/omakub/hooks/theme-set.d/sync-wezterm`:

```bash
#!/bin/bash

# $1 is the theme name
echo "theme = \"$1\"" > ~/.config/wezterm/theme.lua
```

Each `.d` directory ships a working `.sample` file. Drop the extension to activate it.

Test without switching themes back and forth:

```bash
omakub hook theme-set "Tokyo Night"
```
