import './../styles/login.css'
export default function Login(){
    return(
        <>
            <section className="login-page">
                <div className="main-login-cont">
                    <div className="login-pic-cont">
                        <div className="login-pic">
                            
                        </div>
                        <h1 className="login-pic-ttl">WELCOME</h1>
                    </div>
                    <div className="login-details">
                        <h1 className="login-details-ttl">Your Health is Our Responsability</h1>
                        <form action="" className='login-form'>
                            <div className="wrapper">
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label>Username</label>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="input-data">
                                    <input type="password" required/>
                                    <div className="underline"></div>
                                    <label>Password</label>
                                </div>
                            </div>
                            <button className="login-submit">LOGIN</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}