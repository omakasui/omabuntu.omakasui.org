# Extra Themes

## Install from Omakasui

This [page](https://omakasui.org/themes) lists some officially supported themes for Omabuntu. You can install any of these themes by copying the git URL and selecting _Install > Style > Theme_ via the Omabuntu menu (`Super + Alt + Space`). If you want to remove it again, just use _Remove > Style > Theme_ and select it there.

## Making your own theme

You can add your own themes to `~/.config/omakub/themes`. The easiest way to start is to copy one of the existing themes from `~/.local/share/omakub/themes` and use it as a base.

As long as your theme lives in that folder, it will automatically appear in the theme selection menu.

The main file you’ll want to tweak is colors.toml. This file defines the color palette used to generate configurations for the terminal, system monitor (btop and tophat), desktop, application launcher.

### Light mode

If you’re creating a light theme, just add an empty file called `light.mode` in the root of your theme folder. This will automatically associate the theme with light mode across supported applications.

### Icon colors

If you want to match the file manager icons with your theme, add a file called `icons.theme` containing the name of the icon set you want to use. By default, the available options are:

- Yaru
- Yaru-blue
- Yaru-dark
- Yaru-magenta
- Yaru-olive
- Yaru-prussiangreen
- Yaru-purple
- Yaru-red
- Yaru-sage
- Yaru-wartybrown
- Yaru-yellow

### Distributing your theme

If you’d like to share your theme with others, you can publish it on a public Git repository (for example, GitHub). Then it can be installed via _Install > Theme_ in the Omabuntu menu by providing the repository URL.

It’s recommended to follow the naming convention `omabuntu-[themename]-theme`, so the theme will appear correctly as `[themename]` in the theme selection menu after installation.

You can also install themes preceded by `omakasui-`, these are themes designed to be compatible with other setups present on Omakasui.
