<script setup>
import { usePage } from '@inertiajs/inertia-vue3'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const appName = usePage().props.value.appName
</script>
<template>
  <Header :name="appName" />
  <div class="container mx-auto mt-4 pt-12">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
        <Sidebar />
      </div>
      <div class="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
        <slot />
      </div>
      <div class="w-full lg:w-2/12 px-4 hidden lg:block"></div>
    </div>
  </div>
  <Footer :name="appName" />
</template>