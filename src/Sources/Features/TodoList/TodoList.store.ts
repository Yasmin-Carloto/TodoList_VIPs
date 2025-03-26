import { create } from "zustand"
import { Todo } from "../../../Models/Todo"
import { TodoService } from "../../../Services/TodoService"

export type TodoStore = {
    todos: Todo[]
    newTodo: string
    setNewTodo: (text: string) => void
    addTodo: () => void
    deleteTodo: (todo: Todo) => void
    changingDoneStatus: (todo: Todo) => void
    onChangeTask: (todoText: string, todoID: number) => void
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
            todos: TodoService.shared.addTodo(state.todos, state.newTodo),
            newTodo: "",
        }))
    },
    deleteTodo(todo: Todo) {
        set((state) => ({
            ...state,
            todos: TodoService.shared.deleteTodo(state.todos, todo)
        }))
    },
    changingDoneStatus(todo: Todo) {
        set((state) => ({
            ...state,
            todos: TodoService.shared.changingDoneStatus(state.todos, todo)
        }))
    },
    onChangeTask(todoText: string, todoID: number) {
        set((state) => ({
            ...state,
            todos: TodoService.shared.changingTask(state.todos, todoText, todoID)
        }))
    }
}))
