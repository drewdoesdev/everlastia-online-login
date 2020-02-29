import axios from axios;

const loginUser = (user) => {
    axios
        .get('http://localhost:5000/api/users', {
            params: {
                username
            }
        })
        .then(response => (this.user =))
}

module.exports = loginUser