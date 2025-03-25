import { FaTrash } from "react-icons/fa";
import { Task, Checkbox, RemoveButton, TaskInformation, TaskText } from "./Task.style";

export function TaskView() {
    return(
        <Task>
            <TaskInformation>
                <Checkbox type="checkbox" />
                <TaskText value="task 3" type="text" />
            </TaskInformation>
        
            <RemoveButton>
                <FaTrash color="#ff0000" size={18}/>
            </RemoveButton>
        </Task>
    )
}