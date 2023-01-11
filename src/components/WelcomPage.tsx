import React from "react";
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext";
import {Form} from "./Form";
import {MyModal} from "./MyModal";
import {ModalsContext} from "../context/ModalsContext";
import {Link} from "react-router-dom";

export function WelcomePage() {

    const modalCtx = useContext(ModalsContext);

    const userCtx = useContext(UserContext);

    return (
        <div className={'h-100 container d-flex flex-column justify-content-center align-items-center'}>
            {
                userCtx.user
                    ? <h1>Welcome {userCtx.user.userName}</h1>
                    : <>
                        <h1>Please log-in!</h1>
                        <button onClick={() => modalCtx.setShowLoginModal(true)}>Login</button>
                        <MyModal title={'Login PopUp'} show={modalCtx.showLoginModal}
                                 onClose={() => modalCtx.setShowLoginModal(false)}>
                            <Form/>
                        </MyModal>
                    </>
            }
            <Link to={'/game'}>
                <button>
                    play
                </button>
            </Link>
        </div>
    )
}