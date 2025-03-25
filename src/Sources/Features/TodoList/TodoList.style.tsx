import styled from "styled-components";

export const Container = styled.section`
    margin: 2em;

`

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5em;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 2em;
        margin: 0;
    }
`

export const Action = styled.div`
    border: 2px black solid;
    border-radius: 4px;
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const Line = styled.div`
    border: 2px #ff9900 solid;
    width: 10%;
    margin: 0.5em;
`

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 0.5em 1em 0.5em;
    gap: 1em;
    height: 28vh;
    overflow-y: scroll;
`

export const CreateTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.6em;
    gap: 0.5em;
`

export const InputCreateTask = styled.textarea`
    height: 24vh;
    background: transparent;
    resize: none;
    border: 0;
    font-size: 16px;
    justify-content: right;
    outline-color: #ceb0ff;
`

export const AddButton = styled.button`
    border: 0;
    background: #ba8fff;
    color: #fff;
    cursor: pointer;
    align-self: self-end;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20em;
    padding: 0.4em;

    &:hover{
        background: #b69ce0;
    }
` 