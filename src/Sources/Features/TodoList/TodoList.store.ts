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
    todos: JSON.parse(localStorage.getItem("todos") || "[]"),
    newTodo: "",
    setNewTodo(text: string) {
        set((state) => ({
            ...state,
            newTodo: text
        }))
    },
    addTodo() {
        set((state) => {
            const updatedTodos = TodoService.shared.addTodo(state.todos, state.newTodo)
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return {
                ...state,
                todos: updatedTodos,
                newTodo: "",
            }
        })
    },
    deleteTodo(todo: Todo) {
        set((state) => {
            const updatedTodos = TodoService.shared.deleteTodo(state.todos, todo)
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return {
                ...state,
                todos: updatedTodos
            }
        })
    },
    changingDoneStatus(todo: Todo) {
        set((state) => {
            const updatedTodos = TodoService.shared.changingDoneStatus(state.todos, todo)
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return {
                ...state,
                todos: updatedTodos
            }
        })
    },
    onChangeTask(todoText: string, todoID: number) {
        set((state) => {
            const updatedTodos = TodoService.shared.changingTask(state.todos, todoText, todoID)
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return {
                ...state,
                todos: updatedTodos
            }
        })
    }
}))

