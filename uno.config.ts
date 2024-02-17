import { defineConfig } from 'unocss';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
    presets: [
        presetWind()
    ],
    theme: {
        colors: {
            'primary': '#C48CF8',
            'secondary': '#8CF893',
            'tertiary': '#C5B8E6',
            'text': '#FFFFFF',
            'background': '#221F26'
        }
    }
});