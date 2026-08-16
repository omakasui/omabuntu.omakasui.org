# Web Apps

Omabuntu treats websites as first-class applications by wrapping them in isolated browser windows with their own profile, no browser UI, and their own entry in the app launcher.

## Pre-installed Web Apps

Four web apps are installed by default:

| App      | URL              |
| -------- | ---------------- |
| WhatsApp | web.whatsapp.com |
| ChatGPT  | chatgpt.com      |
| YouTube  | youtube.com      |
| GitHub   | github.com       |

They appear in the app launcher (Walker) and the GNOME app grid like native applications.

Each web app runs in a separate browser profile stored in `~/.config/omakub/webapp/<app-name>/`, so sessions, cookies, and settings are completely isolated from the main browser.

## Adding a Web App

Run `omakub-webapp-install` from the terminal or launch it via the Omabuntu Menu (_Install > Web App_):

```bash
omakub-webapp-install
```

It will prompt for the name, URL, and icon. Icons are fetched automatically from the site's favicon when possible; otherwise you'll be prompted for a URL (dashboardicons.com is a good source for high-quality app icons).

The web app opens by default in Chromium or your configured default browser (if it's Chrome, Brave, Edge, Opera, or Vivaldi).

## Removing a Web App

```bash
omakub-webapp-remove
```

This shows an interactive picker and removes the selected app's `.desktop` file and icon, as well as its browser profile data.
