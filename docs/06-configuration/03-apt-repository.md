# APT Repository

Omabuntu maintains a dedicated APT repository at `packages.omakasui.org` to distribute packages not available in Ubuntu's standard repositories, and to keep certain packages more up to date.

## What It Contains

- **Omabuntu-specific packages** — tools built or packaged for this configuration (e.g. `omakub-walker`, `omakub-nvim`, `omakub-zellij`)
- **Updated packages** — packages where the Ubuntu version lags behind and a newer release is preferred

## Automatic Setup

The repository is configured automatically during installation. The keyring is stored at `/usr/share/keyrings/omakasui-packages.gpg` and the source at `/etc/apt/sources.list.d/omakasui.list`.

## Release Channels

The repository supports **stable** and **dev** channels, matching the Omabuntu update channels. Switching channels via _Update > Channel_ in the Omabuntu Menu updates the APT source automatically.
