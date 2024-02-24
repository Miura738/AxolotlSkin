import License from "@/app/component/License";
import {AuiButton} from "@/app/component/aui/aui-button";

const Eula = ({nextStep}:{
    nextStep: () => void
}) => {


        return (
            <>
                <div className={`flex justify-center w-full text-xl font-[mc-ten] text-gray-800`}>terms of use</div>
                <div className={`w-full mb-10`}>
                    <div className={`mb-5`}>1. EULA Agreement{" >"}</div>
                    <div className={`w-full flex flex-col items-center`}>
                        <div>NO other EULA!</div>
                        <div>Please observe local laws</div>
                        <div>and mojang eula</div>
                    </div>

                </div>
                <div className={`w-full mb-10`}>
                    <div className={`mb-5`}>2. Open source LICENSE{" >"}</div>
                    <div className={`w-full flex justify-center`}>
                        <License/>
                    </div>
                </div>
                <div className={`mt-5 flex justify-center items-center gap-4 font-[mc-ten] text-xl`}>
                    <AuiButton onClick={nextStep} className={`w-full`} theme={`success`}>Agree</AuiButton>
                    <AuiButton onClick={() => {
                        alert("没想到会有人点这个.....ᗜˬᗜ")
                    }} className={`w-full`} theme={`danger`}>Disagree</AuiButton>
                </div>
            </>
        )
}

export default Eula;