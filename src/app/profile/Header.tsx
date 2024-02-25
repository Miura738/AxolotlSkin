import getOption from "@/api/options";
import {AuiButton} from "@/app/component/aui/aui-button";
import Link from "next/link";

const Header = async () => {

    const themeColor = await getOption("site_theme") as string;
    const title = await getOption("site_title") as string;


    return (
        <header className={`w-full h-28 flex flex-col text-white`}>
            <div className={`w-full h-8 bg-black flex px-10 justify-end items-center text-xs uppercase font-semibold`}
            style={{color:themeColor}}>
                <Link href={"/profile"} className={`hover:text-white`}>Miourasaki</Link>
                <Link href={"/api/logout"} className={`hover:text-white ml-16`}>Exit</Link>
            </div>
            <div className={`w-full flex-grow bg-[#171615] flex justify-between items-center px-10`}>
                <div className={`flex gap-10 uppercase`}>
                    <Link href={"/profile"} style={{}}>Profile</Link>
                    <div>Other⇗</div>
                </div>
                <div className={`uppercase text-3xl font-[mc-ten]`}>{title}</div>
                <div>
                    <AuiButton theme={`success`} className={`font-[mc-ten]`}>Copy APIPath</AuiButton>
                </div>
            </div>
        </header>
    )
}

export default Header;
