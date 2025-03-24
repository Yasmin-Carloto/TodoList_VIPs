import { create } from "zustand"
import { Todo } from "../../../Models/Todo"
import { TodoService } from "../../../Services/TodoService"

export type TodoStore = {
    todos: Todo[]
    newTodo: string
    setNewTodo: (text: string) => void
    addTodo: () => void
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    newTodo: "",
    setNewTodo(text: string) {
        set((state) => ({
            ...state,
            newTodo: text
        }))
    },
    addTodo() {
        set((state) => ({
            ...state,
            todos: new TodoService().addTodo(state.todos, state.newTodo),
            newTodo: "",
        }))
    },
}))