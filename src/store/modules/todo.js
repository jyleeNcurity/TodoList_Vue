const storage = {
  fetch() {
    const arr = [];
    // 인스턴스 생성되자마자 실행됨. => 새로고침했을 시 사라지는 데이터를 localStorage에서 가져오기 위하여 created 사용
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        // todoInput 컴포넌트에서 입력한 데이터를 localStorage에 저장 후 가져옴
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // this.todoItems = this.todoItems.sort(this.todoItems.id);
        arr.sort((a, b) => new Date(a.id) - new Date(b.id));
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    // 하위컴포넌트인 TodoList.vue에서 emit으로 올려받은 데이터를 함수로 처리
    const obj = {
      completed: false,
      item: todoItem,
      id: new Date().toISOString(),
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },

  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1); // 해당 배열 1개를 삭제하고 새로운 배열을 반환 ==> vue는 reactivity이기에 data를 삭제하면 UI에서도 사라짐
  },

  completeOneItem(state, payload) {
    state.todoItems[payload.index].completed =
      !state.todoItems[payload.index].completed;
    // localStorage는 업데이트 기능이 없기에 지운 후 변한 completed 값을 localStorage.setItem 으로 다시 넣음
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  },

  clearAllItem(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
