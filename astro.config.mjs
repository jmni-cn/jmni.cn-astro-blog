import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import unocss from 'unocss/astro'
import { presetUno, presetIcons } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetTypography from '@unocss/preset-typography'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap(),
		unocss({
			presets: [
			  presetAttributify(),
			  presetUno(),
			  presetIcons({
				collections: {
				  carbon: () =>
					import('@iconify-json/carbon').then((i) => i.icons )
				},
			  }),
			  presetTypography(),
			]
		}),
	],
});
