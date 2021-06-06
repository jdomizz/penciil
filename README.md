![logo](static/pwa-192x192.png)

# Penciil

[![Netlify Status](https://api.netlify.com/api/v1/badges/6d7c222a-5ee9-4896-9e47-245bd07ba87a/deploy-status)](https://app.netlify.com/sites/penciil/deploys)

## About

**Penciil** is a straightforward sketchpad that generates ASCII art animations from your drawings.

It is delivered as a PWA so it can be used online or installed from [penciil.domi.land](https://penciil.domi.land/).

## Usage

To draw or erase on the canvas use the mouse (on a computer) or your finger (on a mobile device). When you are done press the play button to generate the animation.

## Development

The application is built using [TypeScript](https://www.typescriptlang.org/) with [SvelteKit](https://kit.svelte.dev/) and borrows icons from [Feather](https://feathericons.com/).

The following `npm` scripts are available for development:

- `dev`: runs the app for development, reloading on file changes
- `format`: formats the source code
- `lint`: provides diagnostics checks for unused css, a11y hints and js/ts compiler errors
- `build`: builds the app and outputs it in the `build` directory
- `preview`: serves the `build` directory for localhost requests

## Issues

8 antes de 440, 7 a partir de 440 (para 946)

- [ ] Animation error occurring on wide and narrow screens

2319x946 - 5.5 | 2.45
2024x946 - 6 | 2.13
1800x946 - 5.75 | 1.9
1586x946 - 5.44 / 5 | 1.67
1350x946 - 6.1 | 1.42
1280x946 - 6.1 | 1.35
1024x946 - 6.5 | 1.08
1013x946 - 6.5 | 1.07
1009x946 - 6.5 | 1.06
999x946 - 6.5 | 1.05
997x946 - 6.35 | 1.05
994x946 - 6.3 / 6 | 1.05
946x946 - 6 | 1
900x946 - 5.8 | 0.95
894x946 - 6.3 | 0.94
825x946 - 6 | 0.87
798x946 - 6 | 0.84
797x946 - 5.2 | 0.84
700x946 - 6.5 | 0.739
600x946 - 5.5 | 0.63
500x946 - 6 | 0.528
400x946 - 6.5 | 0.42
300x946 - 8 | 0.3
200x946 - 8 | 0.2

280x653 [6.1 - 6.8] 0.42
375x812 [6.3 - 6.8] 0.46
411x823 [6.3 - 6.7] 0.49

320x568 [5.8 - 6.0] 0.56
360x640 [6.3 - 8.0] 0.56
375x667 [6.3 - 6.8] 0.56
411x731 [6.3 - 6.5] 0.56
414x736 [5.5 - 6.7] 0.56

540x720 [6.2 - 6.8] 0.75
768x1024 [6.1 - 6.3] 0.75
1024x1366 [6.1 - 6.6] 0.75

946x946 - [4.6 - 7.4] 1.00

1024x768 [5.7 - 6.2] 1.33
1366x1024 [5.6 - 7.8] 1.33
720x540 [6.6 - 6.8] 1.33
568x320 [4.9 - 5.8] 1.77
640x360 [7.0 - 7.3] 1.77
667x375 [5.3 - 6.3] 1.77
731x411 [5.9 - 6.2] 1.77
736x414 [6.4 - 6.7] 1.77
823x411 [5.8 - 6.0] 2.00
812x375 [5.9 - 6.1] 2.16
653x280 [7.0 - 7.8] 2.33

font-size, line-height, margin-top

const fontSize = 7.4;
const ratio = window.innerWidth / window.innerHeight;
if (ratio < 1) {
// vertical
fontSize =
} else if (ratio > 1) {
// horizontal
}

// Math.ceil(6 + window.innerWidth / window.innerHeight); // 2x3, // 0.6
// Math.ceil(5 + window.innerWidth / window.innerHeight); // 1x1 // 1
// Math.ceil(5 + window.innerWidth / window.innerHeight) - 0.5; // 4x3 // 1.3
// Math.ceil(7 + window.innerWidth / window.innerHeight) - 0.5; // 5x3 (14px) // 1.6
// Math.ceil(3 + window.innerWidth / window.innerHeight); // 6.6x3 // 2 | 2.3
// Math.ceil(4 + window.innerWidth / window.innerHeight); // 7.6x3 (12px) // 2.3 | 2.6
// Math.ceil(8 + window.innerWidth / window.innerHeight); // 8.6x3 (18px) // 2.6 | 3

## License

Distributed under the MIT License.
