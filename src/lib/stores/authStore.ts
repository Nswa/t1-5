// src/lib/stores/authStore.ts
import { writable } from 'svelte/store';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '$lib/firebase';

import type { User } from 'firebase/auth';
//creating svelte store 'user' with nullable for logged out
export const user = writable<User | null>(null);

// Listen for auth changes
onAuthStateChanged(auth, (firebaseUser) => {
   user.set(firebaseUser);
});

// Login function
export async function login(email: string, password: string) {
   try {
      await signInWithEmailAndPassword(auth, email, password);
   } catch (error) {
      console.error('Login error:', error);
   }
}

// Register function
export async function register(email: string, password: string) {
   try {
      await createUserWithEmailAndPassword(auth, email, password);
   } catch (error) {
      console.error('Registration error:', error);
   }
}

// Logout function
export async function logout() {
   try {
      await auth.signOut();
   } catch (error) {
      console.error('Logout error:', error);
   }
}
