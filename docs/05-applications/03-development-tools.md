# Development Tools

Mise, Docker, and the GitHub CLI are installed on every Omabuntu system.

Language runtimes are optional. _Install > Development_ in the Omabuntu Menu covers Ruby on Rails, Node.js, Bun, Deno, Go, PHP, Python, Elixir, Zig, Rust, Java, .NET, OCaml, Clojure, and Scala, or use `omakub install dev-env <name>` and `omakub remove dev-env <name>`.

## Editors

Omabuntu ships with Neovim. For something more mainstream, _Install > Editor_ offers VSCode, Cursor, Zed, and Doom Emacs. VSCode, Cursor, and Obsidian follow the active Omabuntu theme.

Set the system-wide default with _Setup > Defaults > Editor_ or `omakub default editor code`. That's what `$EDITOR` and `Shift + Super + N` use. See [Defaults](/manual/configuration/defaults).

## Mise

[Mise](https://mise.jdx.dev) is a multi-runtime version manager. It handles Ruby, Node.js, Python, Go, and many others from a single tool, replacing rbenv, nvm, pyenv, and similar per-language tools.

Install runtimes per-project with a `.mise.toml` or `.tool-versions` file:

```bash
mise use ruby@3.4
mise use node@22
```

Or globally:

```bash
mise use -g ruby@3.4
```

## Docker

[Docker](https://docker.com) and Docker Compose are installed from the official Docker APT repository as part of the base system. The install adds your user to the `docker` group so `sudo` is not required.

Use [Lazydocker](/manual/applications/tuis) as a TUI front-end for managing containers, or `Super + Shift + D`.

## GitHub CLI

[GitHub CLI](https://cli.github.com) (`gh`) brings GitHub workflows into the terminal: creating pull requests, reviewing, cloning, and more.

Authenticate once:

```bash
gh auth login
```
