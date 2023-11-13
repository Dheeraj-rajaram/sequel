import { redirect, useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    function handleClick() {
        localStorage.removeItem('token');
        navigate('/access');
    }
    return (
        <button className="btn btn-light" onClick={handleClick}>
            <i class="bi bi-box-arrow-left"></i>&nbsp; &nbsp; 
            Logout
        </button>
    );
}

export default Logout;