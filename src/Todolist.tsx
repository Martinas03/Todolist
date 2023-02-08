import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {EditedSpan} from "./EditedSpan";
import {Delete} from "@material-ui/icons";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import Task from "./Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    changeTask: (newValue: string, id: string, todolistId: string) => void
    changeTodolistValue: (newValue: string, id: string) => void
}

export const Todolist = React.memo((props: PropsType) => {
    // console.log('Todolist called')

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [])
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), []);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), []);

    let tasksForTodolist = props.tasks;

    if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
    }

    const addTask = useCallback((newValue: string) => {
        props.addTask(newValue, props.id)
    }, [props.addTask, props.id])

    const changeTodolistValue = useCallback((newValue: string) => {
        props.changeTodolistValue(props.title, props.id)
    }, [props.changeTodolistValue, props.id])

    return <div>
        <h3><EditedSpan title={props.title} omChange={changeTodolistValue}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>

        <ul>
            {
                tasksForTodolist.map(t => {
                    return <Task key={t.id}
                                 id={props.id}
                                 taskId={t.id}
                                 isDone={t.isDone}
                                 title={t.title}
                                 changeTaskStatus={props.changeTaskStatus}
                                 changeTask={props.changeTask}
                                 removeTask={props.removeTask}/>
                })
            }
        </ul>
        <div>
            <Button color={"default"} variant={props.filter === 'all' ? "contained" : "text"}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button color={"primary"} variant={props.filter === 'active' ? "contained" : "text"}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button color={"secondary"} variant={props.filter === 'completed' ? "contained" : "text"}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
})


