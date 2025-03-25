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
                        <TaskView />
                        <TaskView />
                        <TaskView />
                        <TaskView />
                    </TaskContainer>
                </Action>

                <Action>
                    <Line />
                    <CreateTaskContainer>
                        <InputCreateTask placeholder="Type your task..."/>
                        <AddButton>
                            save 
                        </AddButton>
                    </CreateTaskContainer>
                </Action>
            </ActionsContainer>
        </Container>
    )
}