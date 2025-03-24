export class Todo {
    id: number
    todoText: string
    done: boolean

    constructor(id: number, todoText: string, done: boolean){
        this.id = id
        this.todoText = todoText
        this.done = done
    }
}