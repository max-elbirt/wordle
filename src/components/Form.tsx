import React, {FormEvent, FormEventHandler, useContext} from "react";
import {UserContext} from "../context/UserContext";
export function Form() {

    const userCtx = useContext(UserContext);

    const handleSubmit: FormEventHandler = (event: FormEvent) => {
        console.log('form submitted', userCtx.user);
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const dataObj = Object.fromEntries(data);
        console.log(dataObj);
        userCtx.setUser(dataObj);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className={'form-control'} name={'userName'} type={'text'} placeholder={'Enter your user name'}/>
            <input className={'form-control'} name={'password'} type={'text'} placeholder={'Enter your password'}/>
            <button type={'submit'}/>
        </form>
    )
}