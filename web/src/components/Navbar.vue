<template>
  <nav>
    <v-app-bar
      flat
      dark
      class="grey "
      src=""
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :src="backpic"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span class="font-weight-thin font-italic">ZackYule's</span>
        <span class="font-weight-black">&emsp;Blog</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="item in items"
        :key="item.text"
        @click="backpic = item.navpic"
        router
        :to="item.route"
      >
        <span>{{item.text}}</span>
        <v-icon right>{{item.icon}}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      class="indigo"
    >
      <v-layout
        column
        align-center
      >
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              src="/avatar-1.png"
              alt="avatar"
            />
          </v-avatar>
        </v-flex>
        <p class="white--text subheading mt-1">Zhao Yue</p>
        <v-flex>
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      snackbar: false,
      backpic: "/the-path-among-the-trees-nav.jpg",
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-head-lightbulb", text: "Knowledge", route: "/knowledge" },
        { icon: "mdi-basketball-hoop-outline", text: "Blog", route: "/blog" },
        { icon: "mdi-check-decagram", text: "Todolist", route: "/todolist" },
      ],
      items: [
        {
          icon: "mdi-home",
          text: "Home",
          navpic: "/the-path-among-the-trees-nav.jpg",
          route: "/"
        },
        {
          icon: "mdi-head-lightbulb",
          text: "Knowledge",
          navpic: "/conifer-evergreen-fir-trees-fog-nav.jpg",
          route: "/knowledge"
        },
        {
          icon: "mdi-basketball-hoop-outline",
          text: "Blog",
          navpic: "/conifer-evergreen-fir-trees-fog-nav.jpg",
          route: "/blog"
        },
        {
          icon: "mdi-check-decagram",
          text: "Todolist",
          navpic: "/dark-daylight-eerie-environment-nav.jpg",
          route: "/todolist"
        }
      ]
    };
  }
};
</script>

<style>
</style>
