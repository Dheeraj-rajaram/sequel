import { redirect, useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    function handleClick() {
        localStorage.removeItem('token');
        navigate('/access');
    }
    return (
        <button className="btn btn-custom" onClick={handleClick}>
            Logout
        </button>
    );
}

export default Logout;