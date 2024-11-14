<!-- src/lib/components/MonacoEditor.svelte -->
<script lang="ts">
   import { onMount } from 'svelte';

   let editor;
   let editorContainer;

   onMount(async () => {
      const monaco = await import('monaco-editor'); // Load dynamically
      editor = monaco.editor.create(editorContainer, {
         value: '// Start your Genesis journal here...',
         language: 'markdown', // Set preferred language here
         theme: 'vs-dark',
         automaticLayout: true,
      });

      return () => editor.dispose();
   });
</script>

<div bind:this={editorContainer} style="width: 100%; height: 100%;"></div>
