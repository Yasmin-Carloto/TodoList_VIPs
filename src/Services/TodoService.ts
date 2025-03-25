import { Todo } from "../Models/Todo";

export class TodoService {
    static shared = new TodoService()

    addTodo(todoList: Todo[], newTodoText: string) {
        let todo: Todo

        if(todoList.length <= 0) todo = new Todo(1, newTodoText, false) 
        else todo = new Todo(todoList[todoList.length].id + 1, newTodoText, false)
        
        todoList.push(todo)

        return todoList
    }

    deleteTodo(todoList: Todo[], todo: Todo){
        const arrIndex = todoList.indexOf(todo)
        todoList.splice(arrIndex, 1)
    }

    changingDoneStatus(todoList: Todo[], todo: Todo): Todo[]{
        const updatedTodoList: Todo[] = []

        todoList.forEach((todoItem) => {
            if(todoItem.id == todo.id){
                todoItem.done = true
            }
            updatedTodoList.push(todoItem)
        })

        return updatedTodoList
    }
}