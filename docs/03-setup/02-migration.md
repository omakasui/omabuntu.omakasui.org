# Migration

Migrate from an existing [Omakub](https://omakub.org) installation to Omabuntu

## Before You Start

> [!warning]
> The migration process is **not designed to be reversible**. While automatic backups are created during the process, you should not expect to easily roll back to Omakub if something goes wrong. Always make sure you have your own backups of important data before proceeding.

If you already have Omakub installed on your system and want to switch to Omabuntu, the migration script makes this transition smoother by preserving your existing configurations where possible while applying Omabuntu's enhancements.

During the process, your current Omakub setup is backed up, repository references are updated, and Omabuntu-specific customizations are applied. Your personal settings and data are preserved, and any additional Omabuntu components are installed automatically.

## Prerequisites

Before starting, make sure you have:

- An existing Omakub installation
- A stable internet connection
- Administrative privileges (sudo access)
- At least 5GB of free disk space to store backups

> [!note]
> Migration works best from recent Omakub versions. If your Omakub installation is significantly outdated, consider a fresh Omabuntu install instead.

## Migrate

To migrate from Omakub to Omabuntu, run the following command in your terminal:

```bash
curl -fsSL https://omabuntu.omakasui.org/migrate | bash
```

A **reboot is required** at the end to ensure all changes take effect properly.

If you encounter errors, you can consult the [dedicated section](/manual/setup/troubleshooting#migration) in **troubleshooting**.
