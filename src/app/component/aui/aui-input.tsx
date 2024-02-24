import React from "react";
import {PlaceholderValue} from "next/dist/shared/lib/get-img-props";

export interface AuiInputProps {
    theme?: string;
    placeholder?: string;
    children?: string;
    className?: string;
    type?: string;
    name?: string;
    required?: boolean;
    id?:string;
}


export const AuiInput = ({children, className, theme = "light", placeholder, ...props}: AuiInputProps) => {

    function themeNameFalse() {
        switch (theme) {
            case "light": return "border-neutral-200 bg-white hover:bg-neutral-200 focus:bg-neutral-300 text-black";
            case "error": return "border-red-600 bg-red-500 hover:bg-red-600 focus:bg-red-700 text-white";
            case "danger": return "border-red-700 bg-red-600 hover:bg-red-700 focus:bg-red-800 text-white";
            case "success": return "border-green-700 bg-green-600 hover:bg-green-700 focus:bg-green-800 text-white";
            case "allow": return "border-green-600 bg-green-500 hover:bg-green-600 focus:bg-green-700 text-white";
            case "dark": default: return "border-neutral-600 bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-700 text-white";



        }
    }

    return (
        <div className={`${className} `}>
            <input
                placeholder={placeholder} className={`relative w-full h-full border-2 px-3 py-1.5
                                        focus:outline-0
                                ${themeNameFalse()}`}
                    {...props} />
        </div>
    )
}