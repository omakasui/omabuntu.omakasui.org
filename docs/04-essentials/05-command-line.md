# Command Line

Everything the Omabuntu Menu does is also a command.

```bash
omakub <group> <command> [args...]
```

The individual binaries it dispatches to are still on your `PATH`, so `omakub theme set` and `omakub-theme-set` are the same thing.

## Discovery

The CLI documents itself, so you rarely need to look a command up here.

```bash
omakub                     # overview and the list of groups
omakub theme               # every command in the theme group
omakub theme set --help    # usage, arguments, examples
omakub commands            # every command, one per line
omakub commands --all      # include hidden internal commands
omakub commands --json     # machine-readable, for scripting
```

Tab completion is enabled in bash for groups, commands, and their arguments.

## Everyday Commands

| Command                         | Action                               |
| ------------------------------- | ------------------------------------ |
| `omakub update`                 | Update Omabuntu and system packages  |
| `omakub version`                | Show the installed version           |
| `omakub theme list`             | List available themes                |
| `omakub theme set <name>`       | Apply a theme                        |
| `omakub theme bg next`          | Cycle to the next background         |
| `omakub font set <name>`        | Set the system monospace font        |
| `omakub default browser <name>` | Set the default browser              |
| `omakub reminder <minutes>`     | Set a reminder                       |
| `omakub transcode`              | Transcode a picture or video         |
| `omakub share file`             | Send a file with LocalSend           |
| `omakub debug`                  | Collect diagnostics for a bug report |
| `omakub menu`                   | Open the Omabuntu Menu               |

Commands that need root prompt for `sudo` themselves.
