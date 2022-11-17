<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          Hi! Welcome to my site. My name is Gabriel Sanchez and below is a collection of games I have made. Enjoy!
        </p>
      </v-col>
    </v-row>

    <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <a  :href=card.path
                style="text-decoration: none">
            <v-card>
              <v-img
                :src=card.src
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                aspect-ratio="1"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
            </v-card>
            </a>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      cards: [
        { title: 'The Weather Machine', src: require('../assets/twm.png'), path: "https://jogasoftware07.itch.io/the-weather-machine", flex: 12 },
        { title: '2 Many Eggs', src: require('../assets/2me.png'), path: "https://apps.apple.com/us/app/2-many-eggs/id1618833947", flex: 4 },
        { title: 'Seal of Darkness', src: require('../assets/sod.png'), path: "https://jogasoftware07.itch.io/seal-of-darkness", flex: 4 },
        { title: 'Tides of Time', src: require('../assets/tot.png'), path: "https://jogasoftware07.itch.io/tides-of-time", flex: 4 },
      ],
    }),
  }
</script>
