import type { ReactNode } from "react";

export default interface CardPropsType {
    color1: string,
    color2: string
    image: string,
    title: string,
    orientation: 'left'|'right',
    children: ReactNode
}