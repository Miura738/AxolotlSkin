import React, {ReactNode} from "react";
import Link from "next/link";
import getOption from "@/api/options";

const TemplateIndex = async ({children}:{
    children?: ReactNode
}) => {

    const title = await getOption("site_title") as string;

    return (
        <div className={`w-screen h-screen bg-[url(/static/bg-wool-light.png)]
    flex flex-col justify-between items-center xl:p-20 xl:pt-16
                                              md:p-12 md:pt-10
                                              p-8 pt-6`}>
            <div className={`w-full flex justify-between`}>
                <Link href={"/"} className={`text-xl`}>{title}</Link>
                <div className={`text-lg group cursor-pointer`}><span
                    className={`group-hover:translate-x-4 transition-all`}>{'<'}</span><span className={`ml-2`}>Back to previous page</span>
                </div>

            </div>

            {children}

            <div className={`w-full flex justify-between items-end`}>
                <div>© 2024 <a className={`hover:text-pink-700 transition-all`} href={`https://mio.am`}
                               target={`_blank`}>「Miourasaki」</a></div>
                <div className={`flex flex-col items-end`}>
                    <div className={`flex gap-4 mb-3`}>

                        <Link href={`https://t.me/+-0rKJ1DowLcwYzZl`} target={`_blank`}
                              title={`Telegram Channel`}
                              className={`w-8 h-8 border transition-all bg-neutral-200
                          flex justify-center items-center border-neutral-300
                          hover:bg-[#2481cc] hover:text-neutral-200 text-[#2481cc]`}>
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                            </svg>
                        </Link>
                        <Link href={`https://docs.mio.am/axolotlskin`} target={`_blank`}
                              title={`Docs`}
                              className={`w-8 h-8 border transition-all bg-neutral-200
                          flex justify-center items-center border-neutral-300
                          hover:bg-[#cc4628] hover:text-neutral-200 text-[#cc4628]`}>
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path
                                    d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                            </svg>
                        </Link>
                        <Link href={`https://github.com/unnamed-proj/AxolotlSkin?tab=readme-ov-file`} target={`_blank`}
                              title={`Github`}
                              className={`w-8 h-8 border transition-all bg-neutral-200
                          flex justify-center items-center border-neutral-300
                          hover:bg-[#24292e] hover:text-neutral-200 text-[#24292e]`}>
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </Link>

                    </div>
                    <div>Powered by AxolotlSkin</div>
                </div>
            </div>

        </div>
    )
}

export default TemplateIndex;