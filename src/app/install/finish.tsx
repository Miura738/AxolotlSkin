'use client';
import {AuiButton} from "@/app/component/aui/aui-button";
import React from "react";

const Finish = () => {
     return (
                <div className={`w-full h-full flex flex-col justify-between items-center`}>
                    <div className={`flex w-full flex-grow`}>
                        <div className={`text-6xl font-[mc-ten] mt-7 text-green-950`}>Install Finish !</div>
                    </div>
                    <div className={`w-full font-semibold`}>

                        <AuiButton onClick={()=>{

                            location.href="/"
                        }} className={`w-full font-normal mt-5 font-[mc-ten] text-xl`}
                                   theme={`success`}>HOME</AuiButton>
                    </div>
                </div>

            )
}

export default Finish;