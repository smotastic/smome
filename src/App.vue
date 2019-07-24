<template>
  <v-app>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app>
      <v-toolbar-title class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Smome</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push('/')">
        <v-icon>view_week</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('/vacation')">
        <v-icon>videogame_asset</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('/travel')">
        <v-icon>time_to_leave</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({})
};
</script>
