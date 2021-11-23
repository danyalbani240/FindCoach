<template>
  <li>
    <base-card>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="700"
        class="bg-Neutral-white px-7"
      >
        <div>
          <h3 class="text-primary text-4xl font-bold text-center mt-10 mb-5">
            {{ fullName }}
          </h3>
          <h4 class="text-Neutral-Grey3 text-center">
            {{ `قیمت ${rate} دلار/ساعت` }}
          </h4>
          <h4
            class="text-Neutral-Grey3 text-center"
            v-for="area in areas"
            :key="area"
          >
            {{ `${area}:شهر ها` }}
          </h4>
        </div>
        <div class="mx-auto next mt-10 flex justify-evenly actions">
          <base-button name="Contact" />

          <router-link :to="coachDetailsLink">
            <img
              class="w-12 cursor-pointer text-center border-2 rounded-full"
              src="../assets/next.png"
              alt="next"
            />
          </router-link>
        </div>
      </div>
    </base-card>
  </li>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import BaseButton from "./Base/BaseButton.vue";
export default {
  components: { BaseButton },
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
