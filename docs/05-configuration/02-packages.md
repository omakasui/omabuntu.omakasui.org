# Packages

Omabuntu includes a built-in package manager interface that lets you install and remove APT packages directly from the menu, without needing to remember package names or deal with terminal commands manually.

## Installing Packages

Open the Omabuntu menu with `Super + Alt + Space`, then navigate to _Install > Package_. This opens an interactive `fzf`-based browser inside the terminal that lists all available APT packages. You can:

- **Search** by typing part of the package name
- **Preview** the package description with `Alt + P`
- **Scroll** through the preview with `Alt + J` / `Alt + K`
- **Select multiple packages** with `Tab`
- **Confirm** with `Enter`

The selected packages will be installed via `apt`.

## Removing Packages

To remove packages, go to _Remove > Package_ in the Omabuntu menu. This shows a similar `fzf` interface but lists only currently installed packages. Select one or more and confirm to remove them.

## APT Repository

Omabuntu uses a dedicated APT repository hosted at `packages.omakasui.org` to distribute its own packages (such as Walker, Elephant, and omakub-nvim). This repository is configured automatically during installation and kept in sync when switching between release channels.

The repository keyring is stored at `/usr/share/keyrings/omakasui-packages.gpg` and is verified and updated automatically before each system update. The sources list is located at `/etc/apt/sources.list.d/omakasui.list`.

When switching between the _stable_ and _dev_ channels (via _Update > Channel_), the APT source is updated to point to the correct package suite, ensuring you always get the right versions of Omabuntu-specific packages.

## Installing Apps

Beyond APT packages, Omabuntu provides curated app installation through additional submenus under _Install_:

- **Service** — Desktop applications (1password, Bitwarden, Discord, Spotify, etc.)
- **Browser** — Web browsers (Brave, Chromium, Firefox, Zen)
- **Editor** — Code editors (VSCode, Cursor, Zed, Emacs)
- **Terminal** — Terminal emulators (Alacritty, Ghostty, Kitty)
- **Development** — Languages and tools (Docker, Ruby, JavaScript, Go, Python, etc.)
- **Utility** — Utilities (Flameshot, Pinta, Starship, etc.)
- **AI** — AI tools (Ollama)
- **Gaming** — Games (Steam, RetroArch, Minecraft)

Apps installed through these menus can be removed via the corresponding _Remove_ submenus.
