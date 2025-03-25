import { TodoStore } from "./TodoList.store"

export class TodoListProps {
    store: TodoStore
    
    constructor(store: TodoStore) {
        this.store = store
    }
}