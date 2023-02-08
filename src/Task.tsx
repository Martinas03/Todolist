import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import {EditedSpan} from "./EditedSpan";
import {Delete} from "@material-ui/icons";

export type TaskPropsType = {
    id: string
    taskId: string
    isDone: boolean
    title: string
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTask: (newValue: string, id: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void

}

const Task = React.memo((props: TaskPropsType) => {
    const onClickHandler = useCallback(() => props.removeTask(props.taskId, props.id),[props.removeTask, props.taskId, props.id])
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.taskId, newIsDoneValue, props.id);
    },[props.changeTaskStatus, props.taskId, props.id])

    const changeTask = (newValue: string) => {
        props.changeTask(newValue, props.taskId, props.id)
    }

    return <div key={props.taskId} className={props.isDone ? "is-done" : ""}>
        <Checkbox onChange={onChangeHandler} checked={props.isDone} color={"primary"}/>
        <EditedSpan title={props.title} omChange={changeTask}/>
        <IconButton onClick={onClickHandler}>
            <Delete />
        </IconButton>
    </div>
})

export default Task;