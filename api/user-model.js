let id = 0

function getId() {
    return ++id
}

let users = [
    { id: getId(), username: 'Spidey', password: 'webs' },
    { id: getId(), username: 'Batman', password: 'bats' },
]

module.exports = {
    async findAll() {
        return users
    },

    async findById(id) {
        const user = users.find(d => d.id == id)
        return user
      },

    async create({ username, password }) {
        const newUser = { id: getId(), username, password }
        users.push(newUser)
        return newUser
    },
}