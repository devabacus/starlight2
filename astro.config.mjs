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
					autogenerate: { directory: 'auth' },
				},
				{
					label: 'Creative-tools',
					autogenerate: { directory: 'creative-tools' },
				},
				{
					label: 'Devops',
					autogenerate: { directory: 'devops' },
				},
				{
					label: 'Flutter',
					autogenerate: { directory: 'flutter' },
				},
				{
					label: 'Frameworks',
					autogenerate: { directory: 'frameworks' },
				},
				{
					label: 'MCU-dev',
					autogenerate: { directory: 'mcu-dev' },
				},
				{
					label: 'NextCloud',
					autogenerate: { directory: 'nextCloud' },
				},							

			],
			
		}),
	],
});
