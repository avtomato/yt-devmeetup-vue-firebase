<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">My Meetup</h4>
          </v-card-title>
          <v-card-media
            src="https://cdn-images-1.medium.com/max/2000/0*YZ_AzvnD9in4X1Y0.png"
            height="400px">
          </v-card-media>
          <v-card-text>
            <div class="info--text">17th July 2017 - Where it takes place</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa cumque deleniti ducimus, esse facere fuga molestiae molestias, optio reiciendis rerum sapiente! Aliquid aspernatur eius eligendi quibusdam vero? Accusantium, hic.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Meetup'
}
</script>

<style scoped>

</style>
