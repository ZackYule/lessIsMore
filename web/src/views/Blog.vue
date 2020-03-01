<template>
  <div class="blog">
    <v-img
      src="/the-path-among-the-trees-bcg.jpg"
      alt="conifer-evergreen-fir-trees-fog-background"
    >
      <v-container class="my-0">
        <v-form class="px-3" ref="form">
          <v-text-field v-model="search" label="Search" prepend-icon="mdi-cloud-search-outline"></v-text-field>
        </v-form>

        <v-card flat v-for="blog in blogs" :key="blog.title" :class="`px-2 blog ${blog.class}`">
        <v-layout row wrap class="pa-3">
          <v-flex xs12 md6>
            <div class="caption">Blog title</div>
            <h1 v-rainbow class="headline font-italic font-weight-medium">{{ blog.title }}</h1>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Auther</div>
            <div>{{ blog.author }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Date</div>
            <div>{{ blog.date }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Class</div>
            <div>{{ blog.class }}</div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex class="pa-3">
            <article class="font-weight-light">{{blog.content}}</article>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import db from '@/fb'
export default {
  data() {
    return {
      search:"",
      blogs: []
    }
  },
  created(){
    db.collection('blogs').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.blogs.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }  
      })
    })
  }
}
</script>

<style>
.blog.complete {
  margin-left: 0px;
  border-left: 4px solid #3cd1c2;
}
.blog.ongoing {
  margin-left: 0px;
  border-left: 4px solid orange;
}
.blog.overdue {
  margin-left: 0px;
  border-left: 4px solid tomato;
}
</style>