<script setup>
import { ref } from 'vue'

defineProps({
  name: String
})

const showMenu = ref(false)
const date = ref(new Date().getFullYear())
</script>
<template>
  <!-- <footer class="block py-4 pt-12 mt-16 relative"> -->
  <footer class="fixed w-full bottom-0 block py-4 pt-12 mt-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-2xl font-semibold">{{ name }}</h4>
          <h5 class="text-base mt-0 mb-2">A beautiful extension for TailwindCSS.</h5>
          <div class="mt-4">
            <a href="https://www.twitter.com/creativetim" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6 text-slate-400 items-center justify-center align-center outline-none focus:outline-none mr-2 inline-block"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/creativetim" target="_blank">
              <i
                class="fab fa-facebook-square bg-white text-sky-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"
              ></i>
            </a>
            <a href="https://www.dribbble.com/creativetim" target="_blank">
              <i
                class="fab fa-dribbble bg-white text-pink-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"
              ></i>
            </a>
            <a href="https://www.github.com/creativetimofficial" target="_blank">
              <i
                class="fab fa-github bg-white text-slate-800 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"
              ></i>
            </a>
          </div>
          <p class="text-sm mt-6 text-slate-500 font-semibold">
            Currently v1.1.0. Code
            <a
              href="https://github.com/creativetimofficial/tailwind-starter-kit"
              class="text-slate-600"
              target="_blank"
            >licensed MIT</a>.
          </p>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block uppercase text-slate-500 text-sm font-semibold mb-2">Useful Links</span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation"
                    target="_blank"
                  >About Us</a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/blog"
                    target="_blank"
                  >Blog</a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial"
                    target="_blank"
                  >Github</a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free"
                    target="_blank"
                  >Free Products</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-slate-500 text-sm font-semibold mb-2"
              >Other Resources</span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                    target="_blank"
                  >MIT License</a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms"
                    target="_blank"
                  >Terms &amp; Conditions</a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy"
                    target="_blank"
                  >Privacy Policy</a>
                </li>
                <li>
                  <a
                    class="text-slate-600 hover:text-slate-300 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us"
                    target="_blank"
                  >Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-slate-500 font-semibold py-1">
            &copy; {{ date }} {{ name }}
            Created by
            <a
              href="https://lucasbrum.net"
              class="text-slate-500 hover:text-slate-200"
              target="_blank"
            >Lucas Saliés Brum</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>