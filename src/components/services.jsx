import './../styles/services.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone, faVial, faXRay } from '@fortawesome/free-solid-svg-icons';
export function Card(props){
    return(
        <>
            <div className="card">
                <FontAwesomeIcon icon={props.icon} fontSize='4em' />
                <p className="card-s1">{props.title}</p>
                <p className="card-s2">description of the caces <br />
                    that you wnna put in here and you can replace it.
                </p>
            </div>
        </>
    )
}
Card.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
}
export default function Services(){
    return(
        <>
            <div className="stats-bar" id='Ssb'>
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
            <div className="svc" id='svc'>
                <div className="svc-titles">
                    <p className="svc-t1">our services</p>
                    <p className="svc-t2">services for each case</p>
                </div>
                <div className="cards-cont">
                    <Card title='X-Rays' icon={faXRay} />
                    <Card title='Blood test' icon={faVial}/>
                    <Card title='bone scan' icon={faBone}/>
                </div>
            </div>
        </>
    )
}