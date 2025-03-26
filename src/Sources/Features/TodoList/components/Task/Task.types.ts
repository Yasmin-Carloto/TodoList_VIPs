import { ChangeEvent } from "react"

export type TaskType = {
    onCheckboxClicked: () => void
    taskText: string
    onDeleteClicked: () => void
    onChangeTask: (e: ChangeEvent<HTMLInputElement>) => void
}