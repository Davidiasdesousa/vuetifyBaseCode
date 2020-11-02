<template>
  <v-app>
    <ToolBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import ToolBar from "@/components/shared/ToolBar.vue";
export default {
  data: () => ({}),
  components: { ToolBar }
};
</script>