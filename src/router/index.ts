import { createWebHistory, createRouter } from "vue-router";
import TutorialsList from '../components/TutorialsList.vue';
import TutorialDetails from '../components/TutorialDetails.vue';
import AddTutorial from '../components/AddTutorial.vue';

const routes = [
  {
    path: "/",
    name: "tutorials",
    component: TutorialsList,
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: TutorialDetails,
  },
  {
    path: "/add",
    name: "add",
    component: AddTutorial,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;