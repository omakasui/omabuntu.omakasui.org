# Shell Functions

Omabuntu ships a set of shell functions that cover common tasks like compression, media transcoding, SSH tunneling, and Git worktrees. They are defined in files under `~/.local/share/omakub/default/bash/fns/` and sourced automatically into your shell.

## Compression

```bash
compress dir_name/        # creates dir_name.tar.gz
decompress archive.tar.gz # alias for tar -xzf
```

## Drives

### iso2sd

Write an ISO image to an SD card:

```bash
iso2sd ~/Downloads/ubuntu-25.04-desktop-amd64.iso /dev/sda
```

Run `iso2sd` with no arguments to list available SD card devices.

## SSH Port Forwarding

### fip — forward port

```bash
fip myserver 3000         # forward localhost:3000 to myserver:3000
fip myserver 3000 5432    # forward multiple ports in one command
```

### dip — drop port forwarding

```bash
dip 3000          # stop forwarding port 3000
dip 3000 5432     # stop multiple at once
```

### lip — list active forwarded ports

```bash
lip               # print all active SSH port forwarding tunnels
```

## Tmux Layouts

These functions automate common multi-pane Tmux window layouts.

### tdl — dev layout

Opens Neovim, an AI tool, and a terminal in a single window:

```bash
tdl claude        # editor on left, claude on right (30%), terminal at bottom (15%)
tdl claude codex  # same, with a second AI tool below the first
```

### tdlm — multi-project dev layout

Opens a `tdl` layout per subdirectory of the current folder:

```bash
tdlm claude       # one window per child dir, each with editor + claude pane
```

### tsl — swarm layout

Splits the window into N panes all running the same command:

```bash
tsl 4 claude      # four side-by-side panes each running `claude`
```

## Transcoding

### Video

```bash
webm2mp4 screen-recording.webm       # convert GNOME screen recording to mp4
transcode-video-1080p input.mov      # encode to 1920×1080 h264
transcode-video-4K input.mov         # encode to 4K h265
```

### Images

```bash
img2jpg photo.png                    # convert to JPG with quality 85
img2jpg-small photo.tiff             # resize to max 1080px wide, convert to JPG
img2jpg-medium photo.tiff            # resize to max 2160px wide, convert to JPG
img2jpg-large photo.tiff             # resize to max 3160px wide, convert to JPG
img2png photo.jpg                    # convert to compressed lossless PNG
```

## Git Worktrees

These functions make it easy to work across multiple branches simultaneously using Git worktrees.

### ga — add worktree

Run inside a git project directory to create a new worktree and branch beside it:

```bash
ga feature-login    # creates ../myproject--feature-login/ on a new branch
```

The new worktree is placed adjacent to the current directory, runs `mise trust` for runtime version management, and changes to it automatically.

### gd — delete worktree

Run inside a worktree directory to remove it along with its branch:

```bash
gd    # prompts for confirmation, then removes the worktree and deletes the branch
```
