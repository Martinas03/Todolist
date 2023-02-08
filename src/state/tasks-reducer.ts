import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

type ActionsType = RemoveTaskActionType | AddTaskActionType
    | ChangeTaskStatusActionType | ChangeTaskTitleActionType
| AddTodolistActionType | RemoveTodolistActionType

type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}

type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    isDone: boolean
    todolistId: string
}

type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    title: string
    todolistId: string
}


const REMOVE_TASK = 'REMOVE-TASK'
const ADD_TASK = 'ADD-TASK'
const CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS'
const CHANGE_TASK_TITLE = 'CHANGE-TASK-TITLE'

const initialState: TasksStateType = {}

// и инструкцию (action, тоже объект)
// согласно прописаному type в этом action (инструкции) я поменяю state
export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case REMOVE_TASK: {
            const copyState = {...state}
            let todolistTasks = state[action.todolistId];
            // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
            copyState[action.todolistId] = todolistTasks.filter(t => t.id != action.taskId);
            return copyState
        }
        case ADD_TASK: {
            const copyState = {...state}
            let task = {id: v1(), title: action.title, isDone: false};
            //достанем нужный массив по todolistId:
            let todolistTasks = state[action.todolistId];
            // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
            copyState[action.todolistId] = [task, ...todolistTasks];
            return copyState

        }
        case CHANGE_TASK_STATUS: {
            const copyState = {...state}
            let todolistTasks = state[action.todolistId];
            // найдём нужную таску:
            let task = todolistTasks.map(t => t.id === action.taskId ? {...t, isDone: action.isDone} : t);
            //изменим таску, если она нашлась
            copyState[action.todolistId] = task
            return copyState
        }
        case CHANGE_TASK_TITLE: {
            const copyState = {...state}
            let todolistTasks = state[action.todolistId];
            // найдём нужную таску:
            let task = todolistTasks.map(t => t.id === action.taskId ? {...t, title: action.title} : t);
            //изменим таску, если она нашлась
            copyState[action.todolistId] = task
            return copyState
        }
        case "ADD-TODOLIST": {
            const copyState = {...state}
            copyState[action.todolistId] = []
            return copyState
        }
        case "REMOVE-TODOLIST": {
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
        }

        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: REMOVE_TASK, taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: ADD_TASK, title, todolistId}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return {type: CHANGE_TASK_STATUS, taskId, isDone, todolistId}
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: CHANGE_TASK_TITLE, taskId, title, todolistId}
}
