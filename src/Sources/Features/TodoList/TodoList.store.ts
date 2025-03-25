import { create } from "zustand"
import { Todo } from "../../../Models/Todo"
import { TodoService } from "../../../Services/TodoService"

export type TodoStore = {
    todos: Todo[]
    newTodo: string
    setNewTodo: (text: string) => void
    addTodo: () => void
    changingDoneStatus: (todo: Todo) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    newTodo: "rytr",
    setNewTodo(text: string) {
        set((state) => ({
            ...state,
            newTodo: text
        }))
    },
    addTodo() {
        set((state) => ({
            ...state,
            todos: TodoService.shared.addTodo(state.todos, state.newTodo),
            newTodo: "",
        }))
    },
    changingDoneStatus(todo: Todo) {
        set((state) => ({
            ...state,
            todos: TodoService.shared.changingDoneStatus(state.todos, todo)
        }))
    }
}))

export const useHookDoDaniel = (estadoInicial: string) => {
    return estadoInicial.toUpperCase()
}
