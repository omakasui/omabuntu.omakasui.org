# Differences with Omakub

Omabuntu is built on [Omakub](https://omakub.org), the Ubuntu setup tool created by [DHH](https://dhh.dk). It intentionally keeps the same folder structure, naming conventions, and script patterns to stay compatible with the original project. That said, there are meaningful differences and this page covers what changed and why.

## What's Omakub?

Omakub is an opinionated post-installation script for Ubuntu that turns a fresh system into a complete development environment with a single command. It configures GNOME, installs a curated set of tools, applies themes, and sets sensible defaults. It is targeted at developers who want a productive, ready-to-use Linux desktop without manual configuration work.

Omabuntu takes that same foundation and builds further on it, drawing inspiration from [Omarchy](https://omarchy.org), the Arch Linux + Hyprland counterpart, to bring a more polished and feature-rich experience to the Ubuntu ecosystem.

## Key Differences

### Application Launcher: Walker vs Ulauncher

Omakub uses [Ulauncher](https://ulauncher.io) as its application launcher, invoked with `Super + Space`. Omabuntu replaces it with [Walker](https://github.com/abenz1267/walker), a Wayland-native launcher that is faster, more extensible, and deeply integrated into the system. Walker powers not just app launching but the entire Omabuntu Menu — theme selection with live previews, background picker, package management, and more — all from `Super + Alt + Space`.

### Unified Control Menu

Omakub provides a dedicated desktop application (named "Omakub") as the control panel. Omabuntu replaces this with the Walker-based **Omabuntu Menu** (`Super + Alt + Space`), a fully keyboard-driven interface that lives in the terminal launcher. All operations, such as installing apps, switching themes, managing updates, changing fonts, are accessible without touching the mouse.

### Tiling: 4 Columns vs 3 Columns

Both Omakub and Omabuntu ship with [Tactile](https://extensions.gnome.org/extension/4548/tactile/) for grid-based tiling. The difference is in the grid configuration:

Omakub uses Tactile's default layout: **3 columns, 2 rows** (6 zones total), with a center region spanning two large slots and narrower wings on each side. Keys `Q`, `W`, `E` / `A`, `S`, `D` map to those zones.

Omabuntu extends this to a **4-column, 3-row uniform grid** — 12 equal zones, mapped to `Q`, `W`, `E`, `R` / `A`, `S`, `D`, `F` / `Z`, `X`, `C`, `V`. This gives more flexibility on larger displays and makes it easier to work with 3 or 4 apps simultaneously. See the [tiling](/manual/essentials/tiling) section for the full reference.

### Terminal Multiplexer: Tmux-first vs Zellij-first

Omakub's primary terminal multiplexer is [Zellij](https://zellij.dev/), which runs inside Alacritty by default. Omabuntu ships both Zellij and [Tmux](https://github.com/tmux/tmux), with Tmux as the primary session manager. Zellij remains available for those who prefer it.

### Themes

Omakub ships a solid set of themes. Omabuntu extends this with additional defaults (_catppuccin-latte_, _flexoki-light_, _ethereal_, _hackerman_, _vantablack_, _miasma_, _white_, _lumon_, _retro-82_) and adds a mechanism for importing and sharing community themes at [omakasui.org](https://omakasui.org/themes).

### GNOME Extensions

Both projects configure GNOME extensions. Omabuntu adds [Icon Launcher](https://extensions.gnome.org/extension/9134/icon-launcher/) for a persistent top-bar entry point to the menu, and [Quick Settings Tweaks](https://extensions.gnome.org/extension/5446/quick-settings-tweaker/) and [GNOME 4x UI Improvements](https://extensions.gnome.org/extension/4158/gnome-40-ui-improvements/) for a more refined desktop feel.

### Custom Plymouth and GDM3

Omabuntu ships with custom-designed boot and login screens. Omakub includes Plymouth customization too, but Omabuntu extends this to GDM3 as well, creating a fully consistent visual identity from power-on to desktop.

### LTS Focus

Omakub documents support for Ubuntu 24.04+. Omabuntu explicitly targets LTS releases only. Non-LTS is possible but unsupported. See the [installation](/manual/setup/installation) page for details.

### No Snap

Both projects omit Snap by default. In Omabuntu, this is permanent and enforced during installation. Flatpak and the Omakasui APT repository are used instead.

## What Stays the Same

The core toolchain is shared: Neovim (via `omakub-nvim`), Alacritty, Lazygit, Lazydocker, Btop, Fastfetch, and the rest. The folder structure, migration system, and script naming are fully compatible.
