<script >

export default {
  name: "Navbar"
}
</script>

<template>
  <header class="flex justify-between px-4 z-10 mx-auto relative max-w-full">
    <div class="flex justify-center items-center font-semibold">
      <router-link to="/">
        <img class="h-20 w-32 mr-9" src="../assets/mlbb.svg" />
      </router-link>
      <router-link to="/heroes" class="text-white mr-7 text-2xl" href="#">Heroes</router-link>
    </div>
  </header>
</template>

<style>
</style>