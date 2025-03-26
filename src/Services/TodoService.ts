import { Todo } from "../Models/Todo";

export class TodoService {
    static shared = new TodoService()

    addTodo(todoList: Todo[], newTodoText: string) {
        let todo: Todo
        if (todoList.length <= 0) {
            todo = new Todo(1, newTodoText, false)
        } else {
            todo = new Todo(todoList[todoList.length - 1].id + 1, newTodoText, false)
        }
        
        return [...todoList, todo]
    }
    

    deleteTodo(todoList: Todo[], todo: Todo): Todo[]{
        const arrIndex = todoList.indexOf(todo)
        todoList.splice(arrIndex, 1)

        return todoList
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

    changingTask(todoList: Todo[], todoText: string, todoID: number) {
        return todoList.map((todoItem) => 
            todoItem.id === todoID 
                ? { ...todoItem, todoText } 
                : todoItem
        )
    }
}