# Migration

Migrate from an existing Omakub installation to Omabuntu

## Before You Start

> [!warning]
> The migration process is **not designed to be reversible**. While automatic backups are created during the process, you should not expect to easily roll back to Omakub if something goes wrong. Always make sure you have your own backups of important data before proceeding.

If you already have Omakub installed on your system and want to switch to Omabuntu, the migration script makes this transition smoother by preserving your existing configurations where possible while applying Omabuntu's enhancements.

The migration process will:

- Backup your current Omakub configuration
- Update repository URLs and references
- Apply Omabuntu-specific customizations
- Preserve your personal settings and data
- Install additional Omabuntu components

## Prerequisites

- An existing Omakub installation
- A stable internet connection
- Administrative (sudo) privileges
- At least 5GB of free disk space for backups

> [!note]
> Migration works best from recent Omakub versions. If your Omakub installation is significantly outdated, consider a fresh Omabuntu install instead.

## Migrate

To migrate from Omakub to Omabuntu, run the following command in your terminal:

```bash
curl -fsSL https://omabuntu.omakasui.org/migrate | bash
```

A **reboot is required** at the end to ensure all changes take effect properly.

If you encounter errors, you can consult the [dedicated section](/manual/setup/troubleshooting#migration) in **troubleshooting**.
