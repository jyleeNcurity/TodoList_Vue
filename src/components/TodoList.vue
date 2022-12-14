<template>
  <main>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item">
        <i class="fa-sharp fa-solid fa-square-check checkIcon" v-on:click="completeTodo({ todoItem, index })">
        </i>

        <span v-bind:class="{ todoCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>

        <i class="fa-solid fa-trash rmIcon" v-on:click="removeTodo({ todoItem, index })">
        </i>

      </li>
    </transition-group>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["storedTodoItems"]),
  },
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      completeTodo: "completeOneItem",
    }),
  },
};
</script>

<style scoped>
main {
  text-align: center;
  overflow: auto;
  flex-basis: 300px;
}

.rmIcon {
  float: right;
}

.checkIcon {
  float: left;
}

ul {
  align-items: center;
  width: 200px;
  padding-left: 100px;
  list-style: none;
}

.todoCompleted {
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 3px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30px);
}
</style>
