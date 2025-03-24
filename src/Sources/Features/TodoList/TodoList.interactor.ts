import { TodoService } from "../../../Services/TodoService";

class Workers {
    todoService: TodoService;

    constructor(todoService: TodoService) {
        this.todoService = todoService
    }
}

export class TodoListInteractor{
    workers: Workers

    constructor(workers: Workers){
        this.workers = workers
    }
}