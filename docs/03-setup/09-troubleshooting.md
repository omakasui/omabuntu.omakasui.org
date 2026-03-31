# Troubleshooting

If you encounter any errors, this section is a good place to start troubleshooting.

## Installation

### Installation Failed

If installation fails, retry with:

```bash
source ~/.local/share/omakub/install.sh
```

### Permission Issues

Ensure you have sudo privileges:

```bash
sudo -v
```

### LVM Encryption

If the system disk is encrypted using LVM, Omabuntu will not apply the Plymouth customization.

This is intentional. Encrypted LVM setups require an early password prompt during boot, and overriding the default Plymouth behavior can interfere with that flow. To avoid breaking the unlock process, the migration simply skips the Plymouth customization when disk encryption is detected.

The system will boot normally using the default configuration required for encrypted volumes.

## Migration

If something goes wrong during migration:

### Check the migration log

The script creates a detailed log at `/var/log/omabuntu-install.log`. Review it to identify issues:

```bash
cat /var/log/omabuntu-install.log
```

### Restore from backup

Automatic backups are stored in `~/.local/share/omakub-backup-{timestamp}/`. You can manually restore specific files:

```bash
rm ~/.local/share/omakub
cp ~/.local/share/omakub-backup-{timestamp} ~/.local/share/omakub
```

## Known Issue

### `X11` and `Walker`

`Walker` works correctly on both _Wayland_ and _X11_ sessions.

However, when running under _X11_, some visual styles may not be applied exactly as intended due to minor incompatibilities. This can result in a slightly less polished appearance compared to the Wayland experience, but functionality is not affected.

If you are using _Wayland_, you will get the intended visual experience. On _X11_, expect small cosmetic differences only.

## Non-LTS Ubuntu

Omabuntu is designed and tested against Ubuntu LTS releases. If you are running a non-LTS version of Ubuntu, you may encounter issues that are outside the scope of official support.

### Package Not Found or Wrong Version

Non-LTS releases may use different package versions or have packages unavailable in the standard repositories. The Omakasui APT repository targets LTS codenames, so installing Omabuntu packages on a non-LTS release may fail or install an incompatible version.

If this happens, check whether the non-LTS codename is listed in the repository sources at `/etc/apt/sources.list.d/omakasui.list`. You may need to manually point it to the closest LTS codename, understanding that this is unsupported and may cause instability.

### APT Mirror Inconsistencies

Non-LTS Ubuntu releases cycle through their mirror availability as they approach and pass end-of-life. If APT reports missing packages or fails to fetch updates, you may be hitting stale or removed mirrors. In that case, update your `/etc/apt/sources.list` to use the Ubuntu archive mirrors (e.g. `old-releases.ubuntu.com`) appropriate for your release.

### General Advice

If you choose to run Omabuntu on a non-LTS release, be prepared to manually resolve compatibility issues. The recommended path is to upgrade or reinstall to the current LTS (Ubuntu 24.04) and run a fresh Omabuntu installation.
