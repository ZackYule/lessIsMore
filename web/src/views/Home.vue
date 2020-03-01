<template>
  <div class="projects">
    <v-img
      src="/conifer-evergreen-fir-trees-fog-background.jpg"
      alt="the-path-among-the-trees-background"
    >
      <v-container class="my-5">
        <v-form class="px-3" ref="form">
          <v-text-field v-model="search" label="Search" prepend-icon="mdi-cloud-search-outline"></v-text-field>
        </v-form>
        <v-row v-if="this.search.length !== 0">
          <v-col dark sm12 md6>
            content
          </v-col>
          <v-col dark sm12 md6>
            content2
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search:""
    }
  }
}
</script>