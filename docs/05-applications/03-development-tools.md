# Development Tools

Omabuntu installs a suite of development tools as part of the optional _Dev Environment_ setup, available from the Omabuntu Menu on first run or at any time.

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

[Docker](https://docker.com) and Docker Compose are installed from the official Docker APT repository. The install adds your user to the `docker` group so `sudo` is not required.

Use [Lazydocker](/manual/06-applications/06-tuis) as a TUI front-end for managing containers.

## GitHub CLI

[GitHub CLI](https://cli.github.com) (`gh`) brings GitHub workflows into the terminal: creating pull requests, reviewing, cloning, and more.

Authenticate once:

```bash
gh auth login
```

Common commands:

```bash
gh pr create          # open a PR for the current branch
gh pr list            # list open PRs
gh repo clone owner/repo
```

## Editors (optional)

Additional editors are available in the Omabuntu Menu (_Install > App_):

| Editor             | Notes                                                        |
| ------------------ | ------------------------------------------------------------ |
| Visual Studio Code | Microsoft VS Code, with Omabuntu theme applied automatically |
| Cursor             | AI-first code editor based on VS Code                        |
| Zed                | Fast, GPU-accelerated editor                                 |
| Doom Emacs         | Extensible Emacs with a curated config layer                 |
