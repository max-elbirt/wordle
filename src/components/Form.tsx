import React, {FormEvent, FormEventHandler, useContext} from "react";
import {UserContext} from "../context/UserContext";

export function Form() {

    const userCtx = useContext(UserContext);

    const handleSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const dataObj = Object.fromEntries(data);
        userCtx.setUser(dataObj);
    }

    return (
        <form onSubmit={handleSubmit} className={'d-flex flex-column align-items-center justify-content-center'}>
            <input className={'form-control mt-2'} name={'userName'} type={'text'}
                   placeholder={'Enter your user name'}/>
            <input className={'form-control mt-2'} name={'password'} type={'text'} placeholder={'Enter your password'}/>
            <button className={'mt-2 btn btn-outline-secondary'} type={'submit'}>Submit</button>
        </form>
    )
}