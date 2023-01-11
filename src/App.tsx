import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import {UserContext} from "./context/UserContext";
import {useUserState} from "./hooks/useUserState";
import {WelcomePage} from "./components/WelcomPage";
import {ModalsContext} from "./context/ModalsContext";
import {useModalsState} from "./hooks/useModalsState";
import {createBrowserRouter} from "react-router-dom";
import {GameBoardContext} from "./context/GameBoardContext";
import {useGameBoard} from "./hooks/useGameBoard";


function App() {

    return (
        <div>
            {/*<UserContext.Provider value={useUserState()}>*/}
            {/*    <GameBoardContext.Provider value={useGameBoard()}>*/}
            {/*        <GameBoard/>*/}
            {/*    </GameBoardContext.Provider>*/}
            {/*</UserContext.Provider>*/}
            <UserContext.Provider value={useUserState()}>
                <ModalsContext.Provider value={useModalsState()}>
                    <WelcomePage/>
                </ModalsContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default App;
