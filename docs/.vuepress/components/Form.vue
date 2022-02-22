<template>
  <form class="w-full" id="contactForm" name="feedback" data-netlify="true">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-first-name"
        >
          Name
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
          id="grid-first-name"
          type="text"
          name="name"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-last-name"
        >
          Email
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-gray-200
            rounded
            py-3
            px-4
            leading-tight
            focus:outline-none focus:bg-white focus:border-gray-500
          "
          id="grid-last-name"
          type="text"
          name="email"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-password"
        >
          Comments/Feedback
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white focus:border-gray-500
          "
          id="grid-password"
          name="comments"
        />
        <p class="text-gray-600 text-xs italic"></p>
      </div>
    </div>
    <button
      class="
        bg-o4m-blue
        hover:bg-blue-600
        text-white
        font-bold
        py-2
        px-4
        rounded
        inline-flex
        items-center
      "
      type="button"
    >
      <span>Submit</span>
    </button>
  </form>
</template>

<script setup>
</script>

<style scoped>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>

