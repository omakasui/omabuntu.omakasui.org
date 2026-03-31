# Shell Tools

A set of modern command-line tools comes pre-installed with Omabuntu, replacing or augmenting the standard Unix utilities with faster, more ergonomic alternatives.

## fzf

[fzf](https://junegunn.github.io/fzf/) is a general-purpose fuzzy finder. Use `ff` to interactively search files in the current directory tree with a live preview. Use `Ctrl + R` to fuzzy search through command history.

You can also use `**<Tab>` as a fuzzy argument expander for any command — for example, `n **<Tab>` lets you fuzzy-pick files to open in Neovim.

fzf also powers the package browser in the Omabuntu Menu (_Install > Package_).

## eza

[eza](https://eza.rocks/) is a modern replacement for `ls`. It's aliased as `ls` by default, and includes color, icons, and Git integration. Other useful aliases are `lsa` (include hidden files), `lt` (tree listing, two levels deep), and `lta` (tree listing with hidden files).

## bat

[bat](https://github.com/sharkdp/bat) is a `cat` replacement with syntax highlighting, line numbers, and Git diff markers. It's used automatically by fzf previews.

## ripgrep

[ripgrep](https://github.com/BurntSushi/ripgrep) (`rg`) searches file contents recursively. It respects `.gitignore` and is significantly faster than `grep` on large codebases. If you want to search for a specific string in your project, `rg` is the tool to use. For example, to find all occurrences of "Controller" in the `app/` directory you would run `rg Controller app/`.

ripgrep is also used by Neovim's `Space S G` (search file content).

## fd

[fd](https://github.com/sharkdp/fd) is a simpler, faster alternative to `find`. Use it to search for files by name running `fd <pattern>`. For example, `fd person` will find all files with "person" in the name. By default, it searches the current directory and respects `.gitignore`.

## Zoxide

[Zoxide](https://github.com/ajeetdsouza/zoxide) replaces `cd` with a smart directory jumper. It remembers directories you've visited, so you can jump to them by typing just part of the path or name. For example, if you frequently visit `~/projects/omabuntu`, you can jump there from anywhere by running `z omabuntu`.

## Starship

[Starship](https://starship.rs) is the shell prompt. It shows Git status, language runtime versions, and other context automatically. Configuration lives in `~/.config/starship.toml`.
