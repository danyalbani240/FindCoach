<template>
  <div>
    <base-card class="flex flex-col items-center">
      <h2 class="text-6xl text-center">{{ fullName }}</h2>
      <h3>دلار در ساعت{{ selectedCoach.hourlyRate }}</h3>

      <p
        class="
          bg-green-400
          hover:bg-green-500
          p-1
          rounded
          text-white
          transition-all
          cursor-pointer
        "
        v-for="area in selectedCoach.areas"
        :key="area"
      >
        {{ area }}
      </p>
      <p class="text-center">
        {{ selectedCoach.description }}
      </p>
      <h2>مجذوب شده اید؟ همین حالا تماس بگیرید</h2>

      <base-button name="تماس" />
    </base-card>
  </div>
</template>

<script>
import contact from "../../components/contact.vue";
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  props: ["id"],
  components: {
    contact,
  },
  setup(props) {
    const store = useStore();
    const showContactForm = ref(false);
    const selectedCoach = ref(null);
    console.log(selectedCoach.value);
    selectedCoach.value = store.getters["coaches/coaches"].find(
      (coach) => coach.id === props.id
    );
    console.log(selectedCoach.value);

    const fullName = computed(
      () => `${selectedCoach.value.firstName} ${selectedCoach.value.lastName}`
    );
    return {
      showContactForm,
      selectedCoach,
      fullName,
    };
  },
};
</script>
