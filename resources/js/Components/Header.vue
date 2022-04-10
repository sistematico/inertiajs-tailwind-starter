<script setup>
import { ref } from 'vue'

defineProps({
  name: String
})

const showMenu = ref(false)

function toggleNavbar() {
  showMenu.value = !showMenu.value
}
</script>
<template>
  <nav class="fixed z-50 w-full top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg" style="background-color: #1A1A1A">
    <div class="container px-4 mx-auto md:flex md:items-center">

      <div class="flex justify-between items-center">
        <a href="#" class="font-bold text-xl text-indigo-600">{{ name }}</a>
        <button class="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" @click="toggleNavbar()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-slate-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div class="lg:flex flex-grow items-center" :class="{ 'hidden': !showMenu, 'block': showMenu }">
        <!-- <div class="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"> -->
        <div class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Features</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Pricing</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
          <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
        </div>
      </div>
    </div>
  </nav>
</template>