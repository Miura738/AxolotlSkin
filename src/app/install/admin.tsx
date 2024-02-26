import {AuiButton} from "@/app/component/aui/aui-button";
import React, {FormEvent, useEffect, useState} from "react";
import {AuiInput} from "@/app/component/aui/aui-input";
import Loading from "@/app/component/Loading";
import * as skinview3d from "skinview3d"

const Admin = ({nextStep}:{
    nextStep: () => void
}) => {

    const test:number = 50

    const [Query, setQuery] = useState(false);

    const [nameTag, setNameTag] = useState("");

    const [useOnline, setUseOnline] = useState(true);


    useEffect(() => {
        const skinDocker: HTMLDivElement = document.getElementById("skin_div") as HTMLDivElement
        const skinContainer:HTMLCanvasElement = document.getElementById("skin_container") as HTMLCanvasElement

        const h = skinDocker.offsetHeight - test
        const w = h*(3/4)

        const skinViewer = new skinview3d.SkinViewer({
            canvas: skinContainer,
            width: w,
            height: h,
            skin: "/static/6848804015183aed.png"
        })

        skinViewer.autoRotate = true;
        skinViewer.animation = new skinview3d.WalkingAnimation();
        skinViewer.animation.speed = 0.8;

        skinViewer.loadSkin("http://textures.minecraft.net/texture/d90c3970225953c4bef265049ff9ab723b1014836d9afbb5d9823f5444ac3ff9").then(r => r)
        skinViewer.loadCape("http://textures.minecraft.net/texture/f9a76537647989f9a0b6d001e320dac591c359e9e61a31f4ce11c88f207f0ad4").then(r => r)
        setNameTag("Miourasaki")


        let previousHeight = skinDocker.getBoundingClientRect().height;

        // setInterval(() => {
        //   const currentHeight = skinDocker.getBoundingClientRect().height;
        //   if (previousHeight !== currentHeight) {
        //     console.log('元素高度发生变化');
        //     // 在此处添加处理代码
        //         const h = currentHeight - test
        //         const w = h*(3/4)
        //
        //         skinViewer.height = h;
        //         skinViewer.width = w;          }
        // }, 1000); // 每隔 1 秒检测一次

    }, []);

    function submit(event: FormEvent<HTMLFormElement>) {
        setQuery(true)
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formHost = formData.get('host')?.toString();
    }

    return (
        <form onSubmit={submit} className={`flex flex-col justify-between h-full`}>
            <div className={`flex-grow mb-10`}>
                <div className={`flex justify-center w-full text-xl font-[mc-ten] text-gray-800`}>Admin Configure
                </div>

                <div className={`h-full flex p-5`}>
                    <div className={`flex justify-start flex-grow h-full mr-10`}>
                        <div className={`h-8 w-full flex`}>
                            <AuiButton className={`w-full`} onClick={()=>{setUseOnline(true);}}
                                       theme={useOnline? 'success':'dark'}
                                       active={useOnline}
                                       type={`button`}>Minecraft Official</AuiButton>
                            <AuiButton className={`w-full`} onClick={()=>{setUseOnline(false);}}
                                       theme={!useOnline? 'success':'dark'}
                                       active={!useOnline}
                                       type={`button`}>New offline Account</AuiButton>
                        </div>
                    </div>
                    <div id={`skin_div`} className={` h-full flex flex-col justify-center items-center`}>
                        <div className={`bg-stone-700 bg-opacity-30 pb-[0.020rem] px-3 font-[Minecraft] ${nameTag && 'text-white'}`}>{nameTag? nameTag:'Unknown'}</div>
                        <canvas id={`skin_container`}></canvas>
                    </div>
                </div>
            </div>

            <AuiButton type={"submit"} className={`w-full font-[mc-ten] text-xl`} theme={`success`}>Submit</AuiButton>

            <div
                className={`${!Query && 'hidden'} absolute w-full h-full z-10 top-0 left-0 bg-white bg-opacity-80 flex justify-center items-center`}>
                <Loading/>
            </div>
        </form>

    )

}


export default Admin;