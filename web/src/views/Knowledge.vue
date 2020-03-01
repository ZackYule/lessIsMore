<template>
  <div class="knowledg">
    <v-img
      src="/conifer-evergreen-fir-trees-fog-background.jpg"
      alt="conifer-evergreen-fir-trees-fog-background"
    >
      <v-container class="my-5">
        <v-form class="px-3" ref="form">
          <v-text-field v-model="search" label="Search" prepend-icon="mdi-cloud-search-outline"></v-text-field>
        </v-form>

        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="file in fileteredContent" :key="file.id">
            <v-card flat class="text-center ma-3">
              <v-responsive class="pt-4 my-auto">
                <v-img :src="file.svg" height=180></v-img>
              </v-responsive>
              <v-spacer></v-spacer>
              <v-card-text class="pt-2 pb-0">
                <div class="subheading">{{ file.title }}</div>
                <div class="file.class == python ? red--text ; blue--text">{{ file.class }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="grey" class="mx-auto" @click="checkSvg(file)">
                  <span class="text-capitalize">View</span>
                  <v-icon left>mdi-xbox-controller-view</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

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
      targetClass:[],
      files: []
    };
  },
  methods:{
    checkSvg(file){
      const targetUrl = `http://localhost:8080/${file.svg}`;
      console.log(targetUrl)
      window.open(targetUrl, file.title);
    }
  },
  computed:{
    fileteredContent(){
      return this.files.filter(svg => svg.title.toLowerCase().match(this.search.toLowerCase()))
    }
  },
  created(){
    db.collection('svgs').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.files.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }  
      })
    })
  }
};
</script>

<style>
.class.python {
  color: #3cd1c2;
}
</style>