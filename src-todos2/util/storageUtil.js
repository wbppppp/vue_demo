/*
使用localStorage存储数据的工具模块
 */
const TODOS_KEY = 'todos_key';
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
  },
  readTodos(){
    JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]');
  }
}
