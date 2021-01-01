<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld v-bind:msg="`Welcome to your Vue.js App ${user}`" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Home",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user.user);
    return {
      user,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
