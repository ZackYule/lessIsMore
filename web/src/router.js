import Vue from "vue";
import Router from "vue-router";
import Todolist from "./views/Todolist.vue";
import Blog from "./views/Blog.vue";
import Knowledge from "./views/Knowledge.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/knowledge",
      name: "Knowledge",
      component: Knowledge
    },
    {
      path: "/todolist",
      name: "Todolist",
      component: Todolist
    }
  ]
});
