'use client';
import {AuiInput} from "@/app/component/aui/aui-input";
import {AuiButton} from "@/app/component/aui/aui-button";
import Loading from "@/app/component/Loading";
import React, {useEffect, useState} from "react";

const Main = () => {

    const [Query, setQuery] = useState(false);

    useEffect(() => {
    // setQuery(true)

    }, []);

    return (
        <>
            <div className={`w-full sm:w-96 flex flex-col items-center`}>
                <form className={` flex flex-col items-center gap-2 w-full`}>

                    <div className={`w-full`}>
                        <label className={`mb-0.5 text-xs uppercase`}>Username or Email</label>
                        <AuiInput id={`db`} theme={`dark`} placeholder={`example@example.com`} name={`username`}/>
                    </div>
                    <div className={`w-full`}>
                        <label className={`mb-0.5 text-xs uppercase`}>Password</label>
                        <AuiInput id={`db`} theme={`dark`} placeholder={`You Password`} name={`password`}/>
                    </div>

                    <AuiButton className={`mt-10 w-full h-7`} theme={`success`}>Login</AuiButton>
                </form>
                <div className={`mt-10`}>——————————or——————————</div>
                <AuiButton className={`mt-10 w-full text-base h-7`} theme={`success`}>
                    <i className="bi bi-microsoft mr-4"></i>Microsoft Login
                </AuiButton>
            </div>


            <div
                className={`${!Query && 'hidden'} absolute w-full h-full z-10 top-0 left-0 bg-white bg-opacity-50 flex justify-center items-center`}>
                <Loading/>
            </div>
        </>
    )
}

export default Main;