import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, IconButton, TextField} from "@material-ui/core";
import {Add, AddBox} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (newTitle: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    // console.log('AddItemForm loaded')
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)


    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItem();
        }
    }


    return <div>
            <TextField
                value={title}
                variant={"outlined"}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={!!error}
                label={'Title'}
                color={"primary"}
                helperText={error}
            />

            <IconButton color={"primary"} onClick={addItem}>
                <AddBox/>
            </IconButton>
        </div>


})