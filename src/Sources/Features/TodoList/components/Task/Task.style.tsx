import styled from "styled-components"

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f6e3ff;
    gap: 0.9em;
    border: 2px black solid;
    border-radius: 50px;
    padding: 0.6em;

    * {
        margin: 0;
    }
`

export const TaskInformation = styled.div`
    display: flex;
    gap: 0.6em;
    align-items: center;
`

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    appearance: none; 
    width: 1.6em;
    height: 1.3em;
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:checked {
        background-color: #acacff;
        border-color: #6b9aff;
    }

    &:checked::before {
        content: "✔";
        font-size: 0.8em;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const RemoveButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;

    *:hover{
        color: #b90000;
    }
`

export const TaskText = styled.input.attrs({ type: "text" })`
    background: transparent;
    border: 0;
    outline-color: #57c1ff;
    width: 100%;
    font-size: 16px;
`