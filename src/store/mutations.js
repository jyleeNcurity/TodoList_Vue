//필요없는 파일... 기능별로 찢어놓음 => 이미 모듈로 만들어놓음

const addOneItem = (state, todoItem) => {
  // 하위컴포넌트인 TodoList.vue에서 emit으로 올려받은 데이터를 함수로 처리
  const obj = {
    completed: false,
    item: todoItem,
    id: new Date().toISOString(),
  };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1); // 해당 배열 1개를 삭제하고 새로운 배열을 반환 ==> vue는 reactivity이기에 data를 삭제하면 UI에서도 사라짐
};

const completeOneItem = (state, payload) => {
  state.todoItems[payload.index].completed =
    !state.todoItems[payload.index].completed;
  // localStorage는 업데이트 기능이 없기에 지운 후 변한 completed 값을 localStorage.setItem 으로 다시 넣음
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};

const clearAllItem = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, completeOneItem, clearAllItem };
