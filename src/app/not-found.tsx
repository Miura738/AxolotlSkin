import Creeper from "@/assets/creeper.webp"
import Image from "next/image";

export default function Custom404() {
  return (
      <div className={`w-screen h-screen bg-[url(/static/bg-wool-light.png)]
    flex items-center justify-center`}>
          <Image src={Creeper} alt={`404_image`} />
      </div>
  )
}