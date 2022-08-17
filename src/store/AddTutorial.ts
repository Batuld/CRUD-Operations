import { createStore } from "vuex";
import Tutorial from "../types/Tutorial";

export default createStore({
  state: {
    tutorials: [
      {
        id: 1,
        title:  "Demo vuex",
        description: "whole course of vue 3",
        published: false,
      },
      {
        id: 2,
        title:  "UI Design",
        description: "whole course of vue 3",
        published: false,
      }
    ] as Tutorial[]
  },
  mutations: {
    setTask: (state, tutorial) => state.tutorials.push(tutorial),
  },
});