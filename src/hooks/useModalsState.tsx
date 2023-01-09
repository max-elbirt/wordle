import React, {useState} from "react";

export function useModalsState() {
//need to add helpModal state and useState
    const [showLoginModal, setShowLoginModal] = useState(false);

    return {
        showLoginModal,
        setShowLoginModal
    }

}