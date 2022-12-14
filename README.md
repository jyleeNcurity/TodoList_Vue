# 코드 간략 설명  

1. vue-cli로 vue2 프로젝트 생성  
  
2. components 폴더에 TodoHeader, TodoInput, TodoList, TodoFooter 파일 생성  
  
3. 상위 컴포넌트인 App.vue에서 데이터를 담고 조작하며 나머지 4개의 하위 컴포넌트들은 표현만 하도록 설계  
 > - created로 인스턴스 생성됬을 시 localStorage에 있는 데이터를 배열로 담음 => 새로고침 했을 시 대비
 > - TodoInput 컴포넌트에서 입력받은 데이터를 emit으로 상위 데이터인 App.vue에 데이터 전달  
 > - App.vue 데이터를 TodoList컴포넌트에 Props로 내려 주고 리스트 추가  
 > - 삭제, 완료, 모두삭제 시 emit으로 App.vue에서 메소드 정의 후 list 갱신   

 4. 문제점
 > - 새로고침 했을 시 localStorage값 순서에 따라 리스트 출력이 안되고 정렬이 안됨
