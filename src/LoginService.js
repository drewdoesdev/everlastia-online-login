import axios from axios;

const url = 'http://localhost:5000/api/users';

class UserService {
    static getUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch(err) {
                reject(err);
            }
        })
    }
    
    static insertUser(user) {
        return axios.post(url, {
            username: user.username,
            password: user.password,
            email: user.email
        });
    }

    static deleteUser(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default UserService;