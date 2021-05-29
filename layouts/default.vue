<template>
  <v-app dark style="background-color: #f2f2f2">
    <v-app-bar
      :clipped-left="clipped"
      app
      fixed
    >
      <v-toolbar-title v-text="title"/>

      <v-spacer/>
      <v-progress-circular
        color="primary"
        indeterminate
        style="float: right"
        v-if="loading"
      ></v-progress-circular>
      <span style="float: right" v-if="!loading"> #GUMAMURUGO</span>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer
      :fixed="fixed"
      app
    >
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <span>&copy; 2021</span>
<!--          <v-btn style="float: right" text to="/about" color="primary" v-if="!about">About us</v-btn>
          <v-btn style="float: right" text to="/" color="primary" v-else>Go Home</v-btn>-->
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        data() {
            return {
                about:false,
                loading: true,
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'mdi-apps',
                        title: 'Welcome',
                        to: '/'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'COVID 19 Tracker'
            }
        },
        created() {
            this.$root.$on("loading", bool => {
                this.loading = bool
            });
            this.$root.$on("about", bool => {
                this.about = bool
            })
        }
    }
</script>
