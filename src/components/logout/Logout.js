import UserPool from '../../UserPool';

function Logout() {
    function handleClick() {
        UserPool.getCurrentUser().signOut()
    }
    return (
        <button onClick={handleClick}>
            Logout
        </button>
    );
}

export default Logout;