# Tiling

GNOME comes with a simple two-way tiling setup: `Super + Left Arrow` fills the left half, `Super + Right Arrow` the right, and `Super + Up Arrow` expands to full screen. This works well for small screens or simple layouts with just two apps.

For more advanced tiling, Omabuntu ships with [Tactile](https://extensions.gnome.org/extension/4548/tactile/), a GNOME Shell extension that overlays a configurable grid on the screen. You activate it, press keys to snap the focused window into one or more grid zones, and dismiss the overlay.

## Omabuntu's Grid: 4 Columns, 2 Rows

Omakub configures Tactile with a 3-column, 2-row grid (6 zones). Omabuntu extends this to a **4-column, 2-row uniform grid** — 8 equal zones — giving more flexibility on larger displays and making it easy to tile 3 or 4 applications side by side without overlap.

The gap between tiles is set to 10px.

## Using Tactile

Press `Super + T` to activate the tiling overlay. The grid appears on screen with each zone labeled. While the overlay is active:

- **Press a single key** to snap the window to that zone
- **Press two keys in sequence** (first key = top-left corner, second = bottom-right) to span the window across multiple zones

Press `Escape` or wait to dismiss the overlay without moving the window.

To open Tactile's configuration, press `Super + Ctrl + T`.

## Key Layout

The keys map spatially to the grid, matching the QWERTY keyboard layout:

|           | Col 1 | Col 2 | Col 3 | Col 4 |
| --------- | ----- | ----- | ----- | ----- |
| **Row 1** | `Q`   | `W`   | `E`   | `R`   |
| **Row 2** | `A`   | `S`   | `D`   | `F`   |

**Spanning examples:**

- `Q` + `S` → snap to left half (columns 1-2)
- `W` + `D` → snap to middle half (columns 2-3)
- `E` + `F` → snap to right half (columns 3-4)
- `Q` + `F` → snap to full width (columns 1-4)

## Multi-Monitor

While Tactile is active, press `Space` to move the focused window to the next monitor, or `Shift + Space` for the previous one.

## Moving Windows Without a Titlebar

Alacritty and some other apps run without a titlebar. To move them with the mouse, hold `Super`, then click and drag anywhere inside the window.
