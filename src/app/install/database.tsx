import {AuiButton} from "@/app/component/aui/aui-button";
import React, {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {AuiInput} from "@/app/component/aui/aui-input";
import Loading from "@/app/component/Loading";


const Database = ({nextStep}:{
    nextStep: () => void
}) => {
    const [HostInputTheme,setHostInputTheme] = useState("dark");
    const [PortInputTheme,setPortInputTheme] = useState("dark");
    const [AccountInputTheme,setAccountInputTheme] = useState("dark");
    const [DBInputTheme,setDBInputTheme] = useState("dark");
    const [SubmitTheme,setSubmitTheme] = useState("success");

    const [Query, setQuery] = useState(false);

    function resetTheme() {
        setHostInputTheme("dark");
        setPortInputTheme("dark");
        setAccountInputTheme("dark");
        setDBInputTheme("dark");
        setSubmitTheme("success");
    }


    let host: string = "localhost"
    let port: Number = 3306
    let user: string = "root"
    let pwd: string = "123456"
    let db: string = "axolotl"
    let prefix: string = "as_"

    useEffect(() => {
        const hostElement: HTMLInputElement | null = document.getElementById("host") as HTMLInputElement;
        if (hostElement) { // @ts-ignore
            hostElement.value = localStorage.getItem("-temp-install-database-host");
        }

        const portElement: HTMLInputElement | null = document.getElementById("port") as HTMLInputElement;
        if (portElement) { // @ts-ignore
            portElement.value = localStorage.getItem("-temp-install-database-port");
        }

        const userElement: HTMLInputElement | null = document.getElementById("user") as HTMLInputElement;
        if (userElement) { // @ts-ignore
            userElement.value = localStorage.getItem("-temp-install-database-user");
        }

        const pwdElement: HTMLInputElement | null = document.getElementById("pwd") as HTMLInputElement;
        if (localStorage.getItem("-temp-install-database-pwd") && pwdElement) { // @ts-ignore
            pwdElement.value = Number(localStorage.getItem("-temp-install-database-pwd"));
        }

        const dbElement: HTMLInputElement | null = document.getElementById("db") as HTMLInputElement;
        if (dbElement) { // @ts-ignore
            dbElement.value = localStorage.getItem("-temp-install-database-db");
        }

        const prefixElement: HTMLInputElement | null = document.getElementById("prefix") as HTMLInputElement;
        if (prefixElement) { // @ts-ignore
            prefixElement.value = localStorage.getItem("-temp-install-database-prefix");
        }


    }, []);



    function submit(event: FormEvent<HTMLFormElement>) {
        setQuery(true)
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formHost = formData.get('host')?.toString();
        const formPort = Number(formData.get('port'));
        const formUsername = formData.get('username')?.toString();
        const formPassword = formData.get('password')?.toString();
        const formDatabase = formData.get('database')?.toString();
        const formPrefix = formData.get('prefix')?.toString();
        if (formHost) host = formHost;
        if (formPort) port = formPort;
        if (formUsername) user = formUsername;
        if (formPassword) pwd = formPassword;
        if (formDatabase) db = formDatabase;
        if (formPrefix) prefix = formPrefix;


        axios.post(`/install/api/database`,{
            host: host,
            port: port,
            username: user,
            password: pwd,
            database: db,
            prefix: prefix
        })
            .then(r => {
                resetTheme()

                const code = r.data["code"]
                if (code == -1) setHostInputTheme("error");
                if (code == -2) setPortInputTheme("error");
                if (code == 401) setAccountInputTheme("error");
                if (code == -3) setDBInputTheme("error");
                if (code == 0) {
                    localStorage.setItem("-temp-install-database-host",host);
                    localStorage.setItem("-temp-install-database-port",port.toString());
                    localStorage.setItem("-temp-install-database-user",user);
                    localStorage.setItem("-temp-install-database-pwd",pwd);
                    localStorage.setItem("-temp-install-database-db",db);
                    localStorage.setItem("-temp-install-database-prefix",prefix);
                    setTimeout(()=>{setQuery(false);nextStep();},Math.floor(Math.random() * 600) + 200)

                }else setTimeout(()=>{setQuery(false);},Math.floor(Math.random() * 600) + 200)
            })
            .catch(()=>{setSubmitTheme("error");setQuery(false);})
    }

    return (
    <form onSubmit={submit} className={`flex flex-col justify-between h-full`}>
        <div className={``}>
            <div className={`flex justify-center w-full text-xl font-[mc-ten] text-gray-800`}>Database Configure
            </div>

            <div className={`flex w-full mb-10`}>
                <div className={`flex-grow`}>
                    <label className={`mb-0.5 text-xs uppercase`}>MySQL(MariaDB) Host</label>
                    <AuiInput id={`host`} theme={HostInputTheme} placeholder={`localhost`} name={`host`}/>
                </div>
                <div>
                    <label className={`mb-0.5 text-xs uppercase`}>Port</label>
                    <AuiInput id={`port`} theme={PortInputTheme} placeholder={`3306`} type={"number"} name={`port`}/>
                </div>
            </div>

            <div className={`gap-1 flex flex-col mb-5`}>
                <div>
                    <label className={`mb-0.5 text-xs uppercase`}>Database Username</label>
                    <AuiInput id={`user`} theme={AccountInputTheme} required={true} name={`username`}/>
                </div>
                <div>
                    <label className={`mb-0.5 text-xs uppercase`}>Database Password</label>
                    <AuiInput id={`pwd`} theme={AccountInputTheme} required={true} type={`password`} name={`password`}/>
                </div>
            </div>

            <div className={`gap-1 flex mb-5 w-full justify-between`}>
                <div className={`w-full`}>
                    <label className={`mb-0.5 text-xs uppercase`}>Database</label>
                    <AuiInput id={`db`} theme={DBInputTheme} placeholder={`axolotl`} name={`database`}/>
                </div>
                <div className={`w-full`}>
                    <label className={`mb-0.5 text-xs uppercase`}>Prefix</label>
                    <AuiInput id={"prefix"} theme={`dark`} placeholder={`as_`} name={`prefix`}/>
                </div>
            </div>

        </div>
        <AuiButton type={"submit"} className={`w-full font-[mc-ten] text-xl`} theme={SubmitTheme}>Submit</AuiButton>

        <div className={`${!Query && 'hidden'} absolute w-full h-full z-10 top-0 left-0 bg-white bg-opacity-80 flex justify-center items-center`}>
            <Loading />
        </div>
    </form>

    )

}


export default Database;