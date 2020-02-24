import axios from axios;

const login = (user) => {
    axios
        .get('http://localhost:5000/api/users', {
            params: {
                
            }
        })
        .then(response => (this.user =))
}