<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
        <v-btn text slot="activator" class="success" v-on="on">Add New Blog</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Blog</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="title" label="Title" prepend-icon="mdi-blogger" :rules="inputRules"></v-text-field>
          <v-text-field v-model="blogClass" label="Class" prepend-icon="mdi-book-variant" :rules="inputRules"></v-text-field>
          <v-textarea v-model="content" label="Content" prepend-icon="mdi-post-outline" :rules="inputRules"></v-textarea>

          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
                <v-text-field v-on="on" :rules="inputRules"
                :value="formattedDate" clearable label="Date" prepend-icon="mdi-calendar-range">
                </v-text-field>
            </template>
            <v-date-picker v-model="date" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn text @click="submit" class="success mx-0 mt-3" :loading="loading">Add Blog</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
  data() {
    return {
      title: '',
      blogClass: '',
      content: '',
      date: '',
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true
        const blog = { 
          title: this.title,
          class: this.blogClass,
          content: this.content,
          date: format(new Date(this.date), 'PPP'),
          person: 'ZhaoYue'          
        }
        db.collection('blogs').add(blog).then(() => {
          this.loading = false
          this.dialog = false
          this.$emit('projectAdded')
        })
      }
    }
  },
  computed: {
    formattedDate () {
        console.log(new Date(this.date))
      return this.date ? format(new Date(this.date), 'PPP') : ''
    }
  }
}
</script>
