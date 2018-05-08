<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      meetups: [
        {imageUrl: 'https://cdn-images-1.medium.com/max/2000/0*EAHDo4LNL0Qq1FjB.jpg', id: 1, title: 'Meetup in New York'},
        {imageUrl: 'https://cdn-images-1.medium.com/max/2000/0*YZ_AzvnD9in4X1Y0.png', id: 2, title: 'Meetup in Paris'},
        {imageUrl: 'https://cdn-images-1.medium.com/max/2000/0*LyP8lviSfAcPmTT7.png', id: 3, title: 'Meetup in Moscow'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
