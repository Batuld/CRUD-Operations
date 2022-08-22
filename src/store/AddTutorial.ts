import { createStore } from "vuex";
import Tutorial from "../types/Tutorial";
import { findIndex } from "lodash";

export default createStore({
  state: {
    tutorials: [
      {
        id: 1,
        title:  "Tailwind css",
        description: "whole course of vue 3",
        published: false,
      },
      {
        id: 2,
        title:  "UI & UX ",
        description: "vue design course",
        published: false,
      }
    ] as Tutorial[]

    //tutorial: { name: ''}
  },
  mutations: {
    setTask: (state, tutorial) => state.tutorials.push(tutorial),

    deleteTask(state, tutorial) {
      let tutorialIndex = findIndex(state.tutorials, tutorial);
      state.tutorials.splice(tutorialIndex);
    },
  },
});