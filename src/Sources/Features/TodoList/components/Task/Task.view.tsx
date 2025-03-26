import { FaTrash } from "react-icons/fa";
import { Task, Checkbox, RemoveButton, TaskInformation, TaskText } from "./Task.style";
import { TaskType } from "./Task.types";

export function TaskView({ onCheckboxClicked, taskText, onDeleteClicked, onChangeTask }: TaskType) {
    return(
        <Task>
            <TaskInformation>
                <Checkbox type="checkbox" onChange={onCheckboxClicked} />
                <TaskText type="text" value={taskText} onChange={(e) => {onChangeTask(e)}} />
            </TaskInformation>
        
            <RemoveButton onClick={onDeleteClicked}>
                <FaTrash color="#ff0000" size={18}/>
            </RemoveButton>
        </Task>
    )
}