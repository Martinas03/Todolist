import React, {ChangeEvent, useState} from "react";

type EditedSpanPropsType = {
    title: string
    omChange: (newValue: string)=> void
}

export function EditedSpan(props: EditedSpanPropsType) {
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
        : <input value={title}
                 autoFocus={true}
                 onBlur={changeViewMode}
                 onChange={changeValue}
        />
}