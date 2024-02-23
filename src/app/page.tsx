import getOption from "@/api/options";

export default function Home() {

    getOption("site_title").then(result => {
        console.log(result); // 在这里处理查询到的结果
    }).catch(error => {
        console.error(error); // 处理错误
    });

  return (
    <div className={`w-screen h-screen bg-[url(/static/bg-wool-light.png)]
    flex items-center justify-center`}>
      Index
    </div>
  );
}
