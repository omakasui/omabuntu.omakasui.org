# Apps & Packages

Omabuntu provides several ways to install applications: through the Omabuntu Menu with curated app installers, through an APT package browser, and via Flatpak.

## Omabuntu Menu — Curated Apps

The primary way to install and remove applications in Omabuntu is through the Omabuntu Menu (`Super + Alt + Space`). Navigate to _Install_ to access the curated app submenus:

- **Service** — Desktop applications (1Password, Bitwarden, Discord, Dropbox, LibreOffice, LocalSend, OBS Studio, Obsidian, Signal, Spotify, Typora, Tailscale)
- **Browser** — Web browsers (Chrome, Edge, Brave, Firefox, Zen)
- **Editor** — Code editors (VSCode, Cursor, Zed, Doom Emacs)
- **Terminal** — Terminal emulators (Alacritty, Ghostty, Kitty)
- **Development** — Languages and databases (Ruby on Rails, JavaScript, Go, PHP, Python, Elixir, Zig, Rust, Java, .NET, OCaml, Clojure, Scala)
- **Utility** — Utilities (Flameshot, Pinta, Starship, and more)
- **AI** — AI tools (Ollama)
- **Gaming** — Games (Steam, RetroArch, Minecraft)

Apps installed through these menus can be removed via the corresponding _Remove_ submenus (Package, Web App, TUI, Style, Browser, Development, AI, Gaming, Preinstalls). This also works for the apps that come pre-installed, letting you revert to a lean base at any time.

## APT Package Browser

Beyond the curated app list, Omabuntu provides direct access to the full APT package repository through the menu. Go to _Install > Package_ in the Omabuntu Menu to open an interactive `fzf`-based browser that lists all available APT packages. You can:

- **Search** by typing part of the package name
- **Preview** the package description with `Alt + P`
- **Scroll** through the preview with `Alt + J` / `Alt + K`
- **Select multiple packages** with `Tab`
- **Confirm** with `Enter`

The selected packages will be installed via `apt`.

To remove APT packages, go to _Remove > Package_ in the Omabuntu Menu. This shows a similar interface but lists only currently installed packages.

## Flatpak

Omabuntu ships with [Flatpak](https://flatpak.org) and the [Flathub](https://flathub.org) repository configured. Snap is not present. Flatpak apps are sandboxed and install cleanly alongside system packages.

Several pre-installed apps are distributed as Flatpaks. You can also install additional Flatpaks manually:

```bash
flatpak install flathub <app-id>
```

Or browse the available apps at [flathub.org](https://flathub.org).

## Command Line Tools

Some CLI tools are wrappers in `~/.local/bin` that fetch the package on demand instead of being installed system-wide. Add your own with `omakub npm install <package>`. See [AI](/manual/applications/ai).

## Omakasui APT Repositories

Omabuntu distributes some of its own packages (Walker, Elephant, omakub-nvim) through dedicated APT repositories. See the [APT Repositories](/manual/configuration/apt-repository) section for details.
