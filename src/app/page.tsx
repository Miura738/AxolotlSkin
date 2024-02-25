'use client';
import Loading from "@/app/component/Loading";
import {useEffect} from "react";
import {useRouter} from "next/navigation";



export default async function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/profile")
    }, []);


  return (
      <div className={`w-screen h-screen bg-[url(/static/bg-wool-light.png)]
flex items-center justify-center`}>
        <Loading />
      </div>
  );
}
