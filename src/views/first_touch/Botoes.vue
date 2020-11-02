<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn color="primary">Texto 1</v-btn>
        <v-btn dark color="blue">Texto 2</v-btn>
        <v-btn rounded text color="secondary">Texto 3</v-btn>
        <v-btn rounded icon elevation="5" color="secondary">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-icon large color="purple darken-2">
          mdi-dialpad
        </v-icon>
      </v-flex>
    </v-layout>
    <div class="text-center">
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark>
          mdi-minus
        </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark>
          mdi-heart
        </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="teal">
        <v-icon dark>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="cyan">
        <v-icon dark>
          mdi-pencil
        </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="purple">
        <v-icon dark>
          mdi-android
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>