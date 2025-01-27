import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['monaco-editor'],
	},  //ensure vite knows to optimize monaco
	build: {
      rollupOptions: {
         output: {
            manualChunks: {
               'monaco-editor': ['monaco-editor'], // Separate monaco-editor as a chunk
            },
         },
      },
   },
});
