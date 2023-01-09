import {ReactChildren, ReactComponentElement, ReactEventHandler, ReactNode} from "react";

export interface ModalProps {
    show: boolean,
    onClose: ReactEventHandler,
    children: ReactNode,
    title: string,
}