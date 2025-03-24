import { TodoListInteractor } from "./TodoList.interactor"
import { useTodoStore } from "./TodoList.store"

export type TodoListProps = {
    interactor: TodoListInteractor
    store: typeof useTodoStore
}