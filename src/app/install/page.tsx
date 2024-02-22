import Image from "next/image";
export default function Home() {
  return (

    <div className={`w-screen h-screen bg-[url(/static/bg-wool-light.png)]
    flex flex-col justify-between items-start px-20 py-24`}>
      <div className={`font-[mc-ten] text-5xl`}>
          Welcome!
      </div>
        <div className={`w-full flex justify-between`}>
            <div></div>
            <div>Powered by AxolotlSkin</div>
        </div>
    </div>
  );
}
