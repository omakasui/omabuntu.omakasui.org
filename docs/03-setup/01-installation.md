# Installation

Get started with Omabuntu on your Ubuntu system

## Prerequisites

- [A fresh install of Ubuntu Desktop **24.04 LTS**](https://ubuntu.com/download/desktop) on your computer
- A stable connection, to avoid errors when downloading apps and packages

Installation requires a freshly installed Ubuntu Desktop system. You can try it on an existing installation, but conflicts with already installed applications and configurations may occur, and you'll likely lose much of your customization work.

Omabuntu can also be installed on a system where Omakub is already present. In this case, however, it's recommended using the [migration](/manual/setup/migration) procedure.

## LTS Releases

Omabuntu is designed and tested on **Ubuntu 24.04 LTS** and, going forward, on LTS releases in general. Long-term support releases provide the stability and package predictability that Omabuntu's toolchain depends on, and they are the only versions officially supported.

Installing on a non-LTS release is possible but **not recommended**. You may encounter package conflicts, missing dependencies, or mirror inconsistencies that are not present on LTS systems. Resolving those issues would be entirely up to you, no guarantees are made and no bug reports related to non-LTS compatibility will be addressed. If you run into problems, the [troubleshooting](/manual/setup/troubleshooting#non-lts-ubuntu) section has some pointers.

## Install

To install Omabuntu, simply run the following command in your terminal:

```bash
curl -fsSL https://omabuntu.omakasui.org/install | bash
```

The command downloads Omabuntu to your terminal and starts the installation. You'll be asked for your username and email to configure Git, then later to confirm the extensions that will be installed. A reboot is required at the end.

**Rebooting is strongly recommended**, even just to let GNOME apply its updates.

If you encounter errors, you can consult the [dedicated section](/manual/setup/troubleshooting#installation) in **troubleshooting**.
