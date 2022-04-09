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
  <nav
    class="fixed z-50 w-full top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-200"
          href="/learning-lab/tailwind-starter-kit/presentation"
        >
          {{ name }}
        </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center" id="example-navbar-danger" v-bind:class="{'hidden': !showMenu, 'block': showMenu}">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="nav-item">
            <a
              href="https://twitter.com/intent/tweet?text=Check%20Tailwind%20Starter%20Kit%2C%20a%20beautiful%20extension%20of%20%23TailwindCSS%20made%20by%20%40CreativeTim%20%23webdesign%20%23starterkit&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Flearning-lab%2Ftailwind-starter-kit%23%2Fpresentation"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold text-slate-700 hover:text-slate-200"
              target="_blank"
            >
              <i class="fab fa-twitter text-lg leading-lg text-slate-400"></i>
              <span class="ml-2">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold text-slate-700 hover:text-slate-200"
              href="/learning-lab/tailwind-starter-kit/documentation/quick-start"
            >
              <i class="far fa-file-alt text-lg leading-lg text-slate-400"></i>
              <span class="ml-2">Docs</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>