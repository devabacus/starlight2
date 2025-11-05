// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '№1 в Уфе. Пожертвовал детям 700 000руб. ',
			
	// 		logo: {
    //     src: './src/assets/mylogo.jpg',
    //     replacesTitle: false, // false - оставит название рядом с фото
    //   },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			

			sidebar: [
				{
					label: 'Auth',
					collapsed: true,
					autogenerate: { directory: 'auth' },
				},
				{
					label: 'Creative-tools',
					collapsed: true,
					autogenerate: { directory: 'creative-tools' },
				},
				{
					label: 'Devops',
					collapsed: true,
					autogenerate: { directory: 'devops' },
				},
				{
					label: 'Flutter',
					collapsed: true,
					autogenerate: { directory: 'flutter' },
				},
				{
					label: 'Frameworks',
					collapsed: true,
					autogenerate: { directory: 'frameworks' },
				},
				{
					label: 'MCU-dev',
					collapsed: true,
					autogenerate: { directory: 'mcu-dev' },
				},
				{
					label: 'NextCloud',
					collapsed: true,
					autogenerate: { directory: 'nextCloud' },
				},							

			],
			
		}),
	],
});
