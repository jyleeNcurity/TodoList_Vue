<template>
  <div class="Parents-Container">
    <TodoHeader></TodoHeader>
    <div class="Child-Container">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
.Parents-Container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 950px;
  background: linear-gradient(to bottom, #aeb7f3, #6336f7);
}

.Child-Container {
  display: flex;
  flex-direction: column;
  justify-content: top;
  flex-basis: 400px;
  background: white;
}
</style>
