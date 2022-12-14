import Vue from "vue"; //node_modules에서 import해줌
import Vuex from "vuex";
// import * as getters from "./getters.js";
// import * as mutations from "./mutations.js";
import todo from "./modules/todo.js";

Vue.use(Vuex); //globalFunctional 전역으로 접근하기 위하여

// const storage = {
//   fetch() {
//     const arr = [];
//     // 인스턴스 생성되자마자 실행됨. => 새로고침했을 시 사라지는 데이터를 localStorage에서 가져오기 위하여 created 사용
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         // todoInput 컴포넌트에서 입력한 데이터를 localStorage에 저장 후 가져옴
//         arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         // this.todoItems = this.todoItems.sort(this.todoItems.id);
//         arr.sort((a, b) => new Date(a.id) - new Date(b.id));
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  // state: {
  //   todoItems: storage.fetch(),
  // },
  // getters,
  // mutations,
  modules: {
    todo,
  },
});
