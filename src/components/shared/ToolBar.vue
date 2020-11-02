<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img
              src="https://randomuser.me/api/portraits/women/85.jpg"
              alt=""
            />
          </v-avatar>
        </v-flex>
        <v-flex>
          <p>Davi Dias</p>
        </v-flex>
      </v-layout>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{ name: 'Home' }">
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Grid' }">
            <v-list-item-title>Grid</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Botoes' }">
            <v-list-item-title>Botões</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Cards' }">
            <v-list-item-title>Cards</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Modals' }">
            <v-list-item-title>Modais</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Tasks' }">
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>