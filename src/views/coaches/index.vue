<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>refresh</button>
      <router-link to="/Register">ثبت نام به عنوان مربی</router-link>
    </div>
    <!-- check if there is any Coach or not to show -->
    <ul v-if="hasCoach">
      <coach-item
        v-for="coach in filteredCoaches"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
        :id="coach.id"
        :key="coach.id"
      >
        {{ coach.firstName }}
      </coach-item>
    </ul>
    <p v-else>No Coaches Found</p>
  </section>
</template>

<script>
import CoachDetail from "./CoachDetail.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import CoachItem from "../../components/CoachItem.vue";
export default {
  components: { CoachDetail, CoachItem },
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
