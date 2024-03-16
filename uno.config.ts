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

const desktopFonts = {
    'body': mkFont('Jost', 1, 1.4, 'normal'),
    'body-2': mkFont('Space Grotesk', 1.5, 2., 500),
    'nav': mkFont('Jost', 1.1, 1.4, 500),
    'h1': mkFont('Space Grotesk', 5, 5.4, 600),
    'h2': mkFont('Space Grotesk', 3, 3.4, 600),
    'h3': mkFont('Space Grotesk', 2.5, 3, 600),
    'subtitle': mkFont('Jost', 1.2, 1.4, 'normal'),
    'subtitle-2': mkFont('Jost', 1.2, 2, 'normal'),
    'button': mkFont('Jost', 1, 1.4, 600)
}

const mobileFonts = {
    'body': mkFont('Jost', 1, 1.33, 'normal'),
    'body-2': mkFont('Space Grotesk', 1.222, 1.555, 500),
    'nav': mkFont('Jost', 2.5, 3, 500),
    'h1': mkFont('Space Grotesk', 2.5, 2.8, 600),
    'h2': mkFont('Space Grotesk', 1.8, 2.1, 600),
    'h3': mkFont('Space Grotesk', 1.6, 1.9, 600),
    'subtitle': mkFont('Jost', .88, 1.33, 'normal'),
    'subtitle-2': mkFont('Jost', .88, 1.4, 'normal'),
    'button': mkFont('Jost', 1, 1.22, 600)
}

export default defineConfig({
    rules: [
        [/^font-preset-([\w-]+)/, ([, name]) =>
            desktopFonts[name]
        ],
        [/^font-preset-mobile-([\w-]+)/, ([, name]) =>
            mobileFonts[name]
        ],
        [/^column-count-(\d+)/, ([, count]) =>
        {
            return {
                'column-count': count
            }
        }]
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
        })
    ],
    theme: {
        colors: {
            'primary': '#C48CF8',
            'secondary': '#8CF893',
            'tertiary': '#C5B8E6',
            'text': '#FFFFFF',
            'background': '#221F26',
            'background-secondary': '#2D2833'
        },
        breakpoints: {
            ...presetWind().theme.breakpoints,
            'lg': '1200px',
            'text-normal': '600px'
        }
    }
});