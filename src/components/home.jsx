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
                    <p className="s4">Our skilled nurses are ready to serve you the best,just trust us we wont disapoint you.</p>
                    <Link to="/login" className='login-link'><button className="login1">login</button></Link>
                    <button className="more"><a href="#svc" style={{color:'white'}}>View all services</a></button>
                </div>
                <div className="pic-cont"></div>
            </div>
            <div className="stats-bar" id='Hsb'>
                <div className="stats-conts">
                    <p className='nmb'>10</p>
                    <p className='stat'>statistics</p>
                </div>
                <div className="stats-conts">
                    <p className='nmb'>10</p>
                    <p className='stat'>statistics</p>
                </div>
                <div className="stats-conts">
                    <p className='nmb'>10</p>
                    <p className='stat'>statistics</p>
                </div>
            </div>
        </>
    )
}