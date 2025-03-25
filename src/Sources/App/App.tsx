import { useTodoStore } from '../Features/TodoList/TodoList.store'
import { TodoList } from '../Features/TodoList/TodoList.view'

function App() {
  const todoListStore = useTodoStore()

  return(
    <TodoList store={todoListStore} />
  )
}

export default App
