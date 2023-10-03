import { faPerson } from '@fortawesome/free-solid-svg-icons';
import './../styles/stat-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(){
    return(
        <>
            <div className="stat-card">
                <div className="stat-card-ttl-cont">
                    <FontAwesomeIcon className='patients-stat-logo' icon={faPerson}/>
                    <p className="patients-stat-ttl">Total patients</p>
                </div>
                <p className="patients-stat">1561654</p>
                <p className="stat-percent">this day</p>
            </div>
        </>
    )
}