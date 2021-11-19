let getters = {
  coaches(state) {
    return state.coaches;
  },
  hasCoach(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
export default getters;