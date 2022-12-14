<template>
  <footer>
    <span class="clearAll" v-on:click="clearTodo">clearAll</span>
  </footer>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearAllItem",
    }),
  },
};
</script>

<style scoped>
footer {
  height: 30px;
  line-height: 30px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid red;
  margin: 0 auto;
}
.clearAll {
  text-align: center;
  width: 80px;
  color: red;
  display: block;
  user-select: none;
}
</style>
