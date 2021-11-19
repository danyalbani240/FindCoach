<template>
  <h1>CoachDetail</h1>
  <button @click="showContactForm = true">تماس با مربی</button>
  <contact v-if="showContactForm" />
</template>

<script>
import contact from "../../components/contact.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    contact,
  },
  setup() {
    const showContactForm = ref(false);
    return {
      showContactForm,
    };
  },
};
</script>
