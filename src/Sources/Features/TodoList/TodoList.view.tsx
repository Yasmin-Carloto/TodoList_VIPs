import { ChangeEvent } from "react";
import { TaskView } from "./components/Task/Task.view";
import { Action, ActionsContainer, AddButton, Container, CreateTaskContainer, InputCreateTask, Line, TaskContainer } from "./TodoList.style";
import { TodoListProps } from "./TodoList.types";
export function TodoList({ store }: TodoListProps) {
    return(
        <Container>
            <div>
                <h1>Hi, there!</h1>
                <p>Welcome to organize (read in portuguese/br) prototype.</p>
            </div>

            <ActionsContainer>
                <Action>
                    <Line />

                    <TaskContainer>
                        {store.todos.map((todo) => (
                            <TaskView 
                                key={todo.id} 
                                onCheckboxClicked={() => store.changingDoneStatus(todo)} 
                                taskText={todo.todoText} 
                                onDeleteClicked={() => store.deleteTodo(todo)} 
                                onChangeTask={(e: ChangeEvent<HTMLInputElement>) => store.onChangeTask(e.target.value, todo.id)} 
                            />
                        ))}
                    </TaskContainer>
                </Action>

                <Action>
                    <Line />
                    <CreateTaskContainer>
                        <InputCreateTask 
                            placeholder="Type your task..." 
                            value={store.newTodo} 
                            onChange={(e) => store.setNewTodo(e.target.value)} 
                        />
                        <AddButton
                            onClick={() => store.addTodo()}
                        >
                            save
                        </AddButton>
                    </CreateTaskContainer>
                </Action>
            </ActionsContainer>
        </Container>
    )
}