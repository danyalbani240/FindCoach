import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Jalal",
          lastName: "Sanandaji",
          areas: ["marivan"],
          description: `I am jalal 40 year old physic body builder and i have a gym in marivan named physic plus `,
          hourlyRate: 150,
        },
        {
          id: "c2",
          firstName: "Farzad",
          lastName: "habibi",
          areas: ["sanandaj"],
          description: `I am farzad 30 year old classic body builder and i have a gym in sanandaj named Aaj `,
          hourlyRate: 200,
        },
      ],
    };
  },
  mutations,
  actions,
  getters: getters,
};
