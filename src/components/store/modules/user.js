import axios from "axios"

export default {
    actions: {
        LOGIN: ({
            commit
        }, payload) => {
            return new Promise((resolve, reject) => {
                axios.post("login", payload).then(({
                    data,
                    status
                }) => {
                    if (status === 200) {
                        console.log(commit)
                        console.log(data)
                        localStorage.setItem("user_id", data["user_id"])
                        localStorage.setItem("auth_key", data["auth_key"])
                        resolve(true)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        }

    }
}