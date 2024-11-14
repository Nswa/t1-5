<!-- src/routes/+page.svelte -->
<script lang="ts">
   import MonacoEditor from '$lib/components/MonacoEditor.svelte';
   let isAuthenticated = true; // Placeholder for authentication state

   import { user, login, register, logout } from '$lib/stores/authStore';
   import { onMount } from 'svelte';
   import { get } from 'svelte/store';

   let email = '';
   let password = '';
   let isRegister = false;

   const handleAuth = async () => {
      if (isRegister) {
         await register(email, password);
      } else {
         await login(email, password);
      }
   };

</script>

{#if isAuthenticated}
   <!-- Render Monaco Editor if authenticated -->
   <section class="h-screen bg-gray-800 flex justify-center items-center">
      <MonacoEditor class="flex-grow" />
   </section>
{:else}
   <!-- Placeholder for an undismissable authentication modal -->
   <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div class="bg-white p-8 rounded shadow-lg text-center">
         <h2 class="text-xl font-bold mb-4">Welcome to Genesis</h2>
         <p>Please log in or register to access your journals.</p>
         <!-- Placeholder for login/register form -->
         <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Login</button>
         <button class="mt-4 px-4 py-2 bg-gray-500 text-white rounded">Register</button>
      </div>
   </div>
{/if}

{#if $user}
   <p>Welcome, {$user.email}</p>
   <button on:click={logout} class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
   <!-- Monaco Editor component here -->
   <section class="h-screen bg-gray-800 flex justify-center items-center">
      <MonacoEditor class="flex-grow" />
   </section>
{:else}
   <!-- Login/Register Modal -->
   <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div class="bg-white p-8 rounded shadow-lg text-center">
         <h2 class="text-xl font-bold mb-4">{isRegister ? 'Register' : 'Login'}</h2>
         <input
            type="email"
            bind:value={email}
            placeholder="Email"
            class="block mb-2 p-2 border rounded w-full"
         />
         <input
            type="password"
            bind:value={password}
            placeholder="Password"
            class="block mb-4 p-2 border rounded w-full"
         />
         <button on:click={handleAuth} class="px-4 py-2 bg-blue-500 text-white rounded">
            {isRegister ? 'Register' : 'Login'}
         </button>
         <button on:click={() => (isRegister = !isRegister)} class="mt-2 text-blue-500">
            {isRegister ? 'Already have an account? Login' : 'Create a new account'}
         </button>
      </div>
   </div>
{/if}

<style>
   /* Tailwind styling for fullscreen view */
   .h-screen {
      height: 100vh;
   }
</style>

