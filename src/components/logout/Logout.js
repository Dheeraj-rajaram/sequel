import UserPool from '../../UserPool';

function Logout() {
    function handleClick() {
        UserPool.getCurrentUser().signOut()
    }
    return (
        <button className="btn btn-custom" onClick={handleClick}>
            Logout
        </button>
    );
}

export default Logout;