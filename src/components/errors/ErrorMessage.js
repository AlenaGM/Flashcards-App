import img from '../../resources/img/error.gif';
import './errorMessages.scss';


const ErrorMessage = () => {

    return (
        <>
            <img className='error_img' src={img} alt="Error"/>
            <p>This page doesn't exist</p>
        </>
    )
}

export default ErrorMessage;