# Features

How Omabuntu differs can be found here, in a concise list of features and quality-of-life improvements that make the overall experience smoother and more pleasant.

## Improved Installation

The installation process has been refined to be more visually polished and less fragile, with logs available in case something goes wrong. By removing the need to handle multiple installation types and focusing solely on delivering a cohesive desktop experience, the flow now centers on preparing the environment for the user. This also allowed a reduction in the number of default apps, keeping only the usual essentials that are easy to remove, without compromising the idea of a fast startup once installation is complete.

The decision not to pursue an ultra-minimal setup aligns with Omakub’s [_Omakase Doctrine_](https://learn.omacom.io/3/omacom/81/doctrine) and ensures a ready-to-use environment for those approaching Linux for the first time.

## Improved Update

The Omabuntux update now covers the entire system, including integration with GNOME extensions and Flatpaks. Migration management has also been improved, giving users a better overview of what's being updated under the hood.

## Wofi

Omabuntu features seamless integration with [`Wofi`](https://hg.sr.ht/~scoopta/wofi), a powerful application launcher for Wayland. This allows for quick access to applications, themes and, most importantly, a **Unified Menu** for all Omabuntu features.

<video controls width="100%" height="auto" preload="metadata">
  <source src="/videos/wofi-launcher.webm" type="video/webm" />
  <p>Your browser doesn't support HTML5 video. <a href="/videos/wofi-launcher.webm">Download the video</a> instead.</p>
</video>
<p class="text-center">
  <i>A quick demonstration of the Wofi integration and Unified Menu.</i>
</p>

## Shell Scripts

A set of scripts, adapted from Omarchy and customized for Omabuntu, designed to simplify the user experience and integrate seamlessly with its features. Just type `omakub-` in the terminal and press `Tab` to see the full list.

![List of available bins](/images/bins.png)

<p class="text-center">
  <i>List of avaiable <code>/bins</code></i>
</p>

## More Hotkeys

_Yes, using the keyboard is a lot of fun!_ <br/>
That's why we've introduced several shortcuts to make it easier to quickly launch apps, navigate Omabuntu settings, and manage the night light. The plan is to expand them even further!

## More Themes

There are a few more default themes than Omakub: _catppuccin-latte_, _flexoki-light_ , _ethereal_, _hackerman_, _vantablack_, _miasma_ and _white_.

![Catppuccin Latte](/images/catppuccin-latte.png)

<p class="text-center">
  <i>Catppuccin Latte</i>
</p>

![Flexoki Light](/images/flexoki-light.png)

<p class="text-center">
  <i>Flexoki Light</i>
</p>

![Ethereal](/images/ethereal.png)

<p class="text-center">
  <i>Ethereal</i>
</p>

![Hackerman](/images/hackerman.png)

<p class="text-center">
  <i>Hackerman</i>
</p>

All of these themes are based on [Omarchy defaults](https://learn.omacom.io/2/the-omarchy-manual/52/themes).

## Extra Themes

In addition to the above, the ability to import others has been added via a dedicated tool. These can be created by the user or taken from the community.
You can view the extra themes on [omakasui.org](https://omakasui.org/themes).

## Enhance Extensions

More GNOME extensions have been added to make using the overview and quick settings more pleasant, as well as some updates to existing ones.

Specifically, [`Tactile`](https://extensions.gnome.org/extension/4548/tactile/)’s grid has been set to 4 columns to provide greater flexibility, [`Icon Launcher`](https://extensions.gnome.org/extension/9134/icon-launcher/) adds an icon to the top bar that launches the menu, the [`Quick Settings Tweaks`](https://extensions.gnome.org/extension/5446/quick-settings-tweaker/) extension updates the user menu in the GNOME top bar and [`GNOME 4x UI Improvements`](https://extensions.gnome.org/extension/4158/gnome-40-ui-improvements/) has been included to bring more consistency to the overview.

![Icon Launcher](/images/icon-launcher.png)

<p class="text-center">
  <i>Icon Launcher</i>
</p>

## Custom Plymouth and GDM3

Omabuntu comes with _custom Plymouth_ boot screen and _GDM3_ login screen designs, creating a cohesive and consistent visual experience from boot to login that matches the overall desktop theme.

## Apps

The pre-installed applications are significantly reduced, giving the user greater freedom of choice over what to add once the system is fully booted.

The installation menu covers a good portion of the tools that may be useful for getting started. They can also be removed at any time, reducing the system to only essentials. The ability to remove and re-add pre-installed apps has also been added, allowing you to revert to a "fresh" Omabuntu whenever you want.

## Kitty

While Alacritty remains the default, I preferred to add the ability to switch to Kitty, aligning it with the existing themes.

## No SNAP!

Yes, exactly... _*no Snap*_! It’s a choice I’ve always made and continue to stick with, to avoid a system bloated with preinstalled software and forced defaults. Rather, I prefer **_Flatpak_** and its architecture. It installs faster and is far less invasive on the system.
