const useAuth = () => {
    return {
        authToken: localStorage.getItem('token'),
        setAuthToken: (token) => { localStorage.setItem('token', token); }
    }
}
export default useAuth;