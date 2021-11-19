<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>refresh</button>
      <router-link to="/Register">ثبت نام به عنوان مربی</router-link>
    </div>
    <!-- check if there is any Coach or not to show -->
    <ul v-if="hasCoach">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <p v-else>No Coaches Found</p>
  </section>
</template>

<script>
import CoachDetail from "./CoachDetail.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
export default {
  components: { CoachDetail },
  setup() {
    const store = useStore();
    // Coaches To Show in The List
    let filteredCoaches = computed(() => store.getters["coaches/coaches"]);
    return {
      filteredCoaches,
      hasCoach: computed(() => store.getters["coaches/hasCoach"]),
    };
  },
};
</script>

<style></style>
