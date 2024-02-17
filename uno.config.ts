import { defineConfig } from 'unocss';

import transformDirectives from '@unocss/transformer-directives';

import presetWind from '@unocss/preset-wind';
import presetWebFonts from '@unocss/preset-web-fonts';

const mkFont = (fontFamily, size, height, weight) => ({
    'font-family': fontFamily,
    'font-size': `${size}rem`,
    'line-height': `${height}rem`,
    'font-weight': weight
});

const fonts = {
    'body': mkFont('Jost', 1, 1.4, 'normal'),
    'nav': mkFont('Jost', 1.1, 1.4, 500),
    'h1': mkFont('Space Grotesk', 10, 12, 600),
    'h2': mkFont('Space Grotesk', 3, 4.4, 600),
    'h3': mkFont('Space Grotesk', 2.5, 3, 600),
    'subtitle': mkFont('Jost', 1.2, 1.4, 'normal'),
    'button': mkFont('Jost', 1, 1.4, 600)
}

export default defineConfig({
    rules: [
        [/^font-preset-(\w+)/, ([, name]) =>
            fonts[name]
        ]
    ],
    transformers: [
        transformDirectives()
    ],
    presets: [
        presetWind(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                heading: 'Space Grotesk',
                sans: 'Jost'
            }
        }),
    ],
    theme: {
        colors: {
            'primary': '#C48CF8',
            'secondary': '#8CF893',
            'tertiary': '#C5B8E6',
            'text': '#FFFFFF',
            'background': '#221F26'
        },
        breakpoints: {
            ...presetWind().theme.breakpoints,
            'lg': '1200px',
            'text-normal': '600px'
        }
    }
});