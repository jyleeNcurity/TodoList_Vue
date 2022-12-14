<template>
  <div class="inputDiv">
    <span>
      <input type="text" v-model="TodoItem" v-on:keyup.enter="addTodo" />
      <i class="fa-solid fa-circle-plus" v-on:click="addTodo"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i
          class="fa-regular fa-circle-xmark closeModalBtn"
          @click="showModal = false"
        ></i>
      </h3>
      <h4 slot="body">list를 적어주세요.</h4>
    </Modal>
  </div>
</template>

<script>
import TodoModal from "./common/TodoModal.vue";

export default {
  data() {
    return {
      TodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.TodoItem !== "") {
        this.$store.commit("addOneItem", this.TodoItem);
        this.clearInput();
      } else {
        //빈 input이면 showModal이 true가 되면서 모달 화면이 띄워짐
        this.showModal = !this.shoModal;
      }
    },
    clearInput() {
      this.TodoItem = "";
    },
  },
  components: {
    Modal: TodoModal,
  },
};
</script>

<style scoped>
.inputDiv {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
span {
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
  border-radius: 20px 20px 20px 20px;
  border: 2px solid blue;
}
input {
  border-radius: 5px 5px 5px 5px;
  border-style: none;
}
input:focus {
  outline: none;
}
</style>
