import React, {useState} from "react";
import {User} from "../types/User";

export function useUserState() {

    const [user, setUser] = useState(null);

    return {
        user,
        setUser,
    }
}