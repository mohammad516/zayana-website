import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles ?: string;
    handleClick ?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}


export interface TempProps{ 
    _id: string;
    title:string;
    category:string;
    price:string;
    img: string;
    discount: string;
    stock: string;
    color: JSON;
    type: string;
    description: string;
}
 
 