# Security

## Firewall

`ufw` is enabled during installation and starts on boot. Incoming traffic is denied, outgoing is allowed. Two exceptions are opened: port `53317` for [LocalSend](/manual/applications/desktop-tools), and DNS from the Docker bridge to the host.

Docker is locked down with [ufw-docker](https://github.com/chaifeng/ufw-docker), so publishing a container port doesn't bypass the firewall.

SSH is not open. Install and enable `openssh-server` yourself if you need it.

```bash
sudo ufw status verbose
```

## No Snap

Snap is purged during installation and held so a later dependency cannot pull it back in. Flatpak with Flathub is configured instead.

## Packages

Both Omakasui APT repositories are signed, and the keyrings are re-verified on every update. See [APT Repositories](/manual/configuration/apt-repository).

The command wrappers in `~/.local/bin` refuse npm versions published in the last two hours, which covers most of the window in which a compromised release gets caught and pulled.

## Disk Encryption

Omabuntu doesn't set up disk encryption. That's a choice you make in the Ubuntu installer, before Omabuntu runs.

If encryption is detected, Omabuntu skips the Plymouth boot screen customization so it cannot interfere with the unlock prompt.
