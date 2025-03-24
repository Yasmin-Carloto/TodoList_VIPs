import { Todo } from "../Models/Todo";

export class TodoService {

    addTodo(todoList: Todo[], newTodoText: string) {
        let todo: Todo

        if(todoList.length <= 0) todo = new Todo(1, newTodoText, false) 
        else todo = new Todo(todoList[todoList.length].id + 1, newTodoText, false)
        
        todoList.push(todo)

        return todoList
    }
}