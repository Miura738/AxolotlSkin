import "./Loading.css"

const Loading = ({text = "..."}: {
    text?:string
}) => {
    return (
        <>
            <div className="preloader">
                <div className="bigsquare">
                    <div className="square first"></div>
                    <div className="square second"></div>
                    <div className="square third"></div>
                    <div className="square fourth"></div>
                </div>
                <p className={`mb-1.5 mt-4`}>{text}</p>
            </div>
        </>
    )


}

export default Loading;