<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <button>Contact</button>
      <router-link :to="coachDetailsLink">ViewDetails</router-link>
    </div>
  </li>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    rate: {
      type: Number,
    },
    areas: {
      type: Array,
    },
    id: String,
  },

  setup(props) {
    const route = useRoute();

    let fullName = computed(() => props.firstName + " " + props.lastName);
    let coachContactLink = computed(
      () => route.path + "/" + props.id + "/contact"
    );
    let coachDetailsLink = computed(
      () => route.path + "/" + props.id + "/contact"
    );
    return {
      fullName,
      coachContactLink,
      coachDetailsLink,
    };
  },
};
</script>

<style></style>
