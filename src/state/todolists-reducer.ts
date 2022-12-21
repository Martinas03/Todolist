import {TodolistType} from "../App";

type ActionType = {
    type: string
    [key: string]: any
}

// и инструкцию (action, тоже объект)
// согласно прописаному type в этом action (инструкции) я поменяю state
export const todolistsReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id != action.id)
        default:
            throw new Error("I don't understand this type")
    }
}