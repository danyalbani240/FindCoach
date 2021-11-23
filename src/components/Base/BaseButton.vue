<template>
  <button class="bg-red-400 p-4 rounded hover:bg-red-500 transition-all text-white">
    {{ name }}
  </button>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
  },
};
</script>
