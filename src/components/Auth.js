class Auth {
    constructor() {
        this.name = "null"
        this.Email = "null"
        this.Subject = "null"
        this.Message = "null"
        this.Token = "null"
    }

    setToken(param) {
        this.token = param
    }
    getToken() {
        return this.token
    }
    setUser(name, mail, subject, message) {
        this.name = name
        this.Email = mail
        this.Subject = subject
        this.Message = message
    }
    getUser() {
        const arr = []
        arr.push(this.Name)
        arr.push(this.Email)
        arr.push(this.Subject)
        arr.push(this.Message)
        arr.push(this.Token)
        return arr
    }
}

export default new Auth()