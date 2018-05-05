<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" fixed>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="purple darken-1">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left dark>supervisor_account</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>

    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  name: 'App'
}
</script>
