import { defineConfig } from 'unocss';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
    presets: [
        presetWind()
    ],
    theme: {
        colors: {
            'a': '#111',
            'b': '#FF00FF'
        }
    }
});