import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://cdn-images-1.medium.com/max/2000/0*YZ_AzvnD9in4X1Y0.png',
        id: '1',
        title: 'Meetup in New York',
        date: '2017-07-17'
      },
      {
        imageUrl: 'https://cdn-images-1.medium.com/max/2000/0*ia6oiF3zdYilEjdo.jpg',
        id: '2',
        title: 'Meetup in Paris',
        date: '2017-07-19'
      },
      {
        imageUrl: 'https://cdn-images-1.medium.com/max/2000/0*EAHDo4LNL0Qq1FjB.jpg',
        id: '3',
        title: 'Meetup in Moscow',
        date: '2017-07-21'
      }
    ],
    user: {
      id: '1',
      registeredMeetups: ['1']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '4'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
