import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditedSpanPropsType = {
    title: string
    omChange: (newValue: string) => void
}

export const EditedSpan = React.memo((props: EditedSpanPropsType) => {
    console.log('EditableSpan called' )
    let [editMode, setEditMode] = useState(true)
    let [title, setTitle] = useState(props.title)

    const changeEditMode = () => {
        setEditMode(!editMode)
    }
    const changeViewMode = () => {
        setEditMode(!editMode)
        props.omChange(props.title)
    }

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        setTitle(newValue)
    }

    return editMode
        ? <span onDoubleClick={changeEditMode}>{title}</span>
        : <TextField
            value={title}
            autoFocus={true}
            onBlur={changeViewMode}
            onChange={changeValue}
        />
})