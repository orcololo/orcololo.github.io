<template>
  <div class="border-black shadow-2xl">
    <div>
      <img :src="author.image" class="shadow-2xl rounded-full max-w-xs" />
    </div>
    <div class="text-base text-gray-900">
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
