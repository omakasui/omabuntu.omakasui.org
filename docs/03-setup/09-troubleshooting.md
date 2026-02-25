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

### `X11` and `wofi`

`wofi` works correctly on both _Wayland_ and _X11_ sessions.

However, when running under _X11_, some visual styles may not be applied exactly as intended due to minor incompatibilities. This can result in a slightly less polished appearance compared to the Wayland experience, but functionality is not affected.

If you are using _Wayland_, you will get the intended visual experience. On _X11_, expect small cosmetic differences only.
