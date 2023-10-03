import './../styles/home.css'
import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <>
            <div className='home' id='home'>
                <div className="artical">
                    <p className="s1">INTRODUCTING A NEW HEALTH CARE </p>
                    <p className="s2">Bringing Loving</p>
                    <p className="s3">Care to Health Care</p>
                    <p className="s4">our skilled nurses are ready to serve you the best,just trust us we wont disapoint you.</p>
                    <button className="login1"><Link to="/login" className='login-link'>log in</Link></button>
                    <button className="more"><a href="#svc" style={{color:'white'}}>view all services</a></button>
                </div>
                <div className="pic-cont"></div>
            </div>
        </>
    )
}