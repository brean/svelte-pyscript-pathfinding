import adapter from '@sveltejs/adapter-static';
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: seqPreprocessor([vitePreprocess()]),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: '/svelte-pyscript-pathfinding',
			relative: true
		}
		
	}
};

export default config;