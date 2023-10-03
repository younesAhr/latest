import './../styles/user.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function User(props){
    return(
        <>
            <div className="user-data-cont">
                <p className="user-data">{props.name}</p>
                <p className="user-data">{props.age}</p>
                <p className="user-data">{props.gender}</p>
                <p className="user-data">{props.status}</p>
                <p className="user-data"id='push-results'><FontAwesomeIcon icon={faPenToSquare}/> push</p>
            </div>
        </>
    )
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};