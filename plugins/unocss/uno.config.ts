// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerDirectives,
} from 'unocss';
import presetThelastcookies from './preset';

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
    presetTypography(),
    presetThelastcookies(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: [
    'i-mdi-format-list-text',
  ],
});
