import { createStore } from "vuex";
import Tutorial from "../types/Tutorial";
//import { findIndex } from "lodash";

export default createStore({
  state: {
    tutorials: [
      {
    
        title:  "Demo vuex",
      
        published: false,
      },
      {
        title:  "UI Design",
        
        published: false,
      }
    ] as Tutorial[]
  },
  mutations: {
    setTask: (state, tutorial) => state.tutorials.push(tutorial),
  },
});