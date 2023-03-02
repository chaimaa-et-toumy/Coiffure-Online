const Role = require('../Models/roleUserModel')
const roles = ['Admin', 'Client']

const createAutoRole = async () => {
    const count = await Role.countDocuments({})
    if (count === 0) {
        for (let i = 0; i < roles.length; i++) {
            const role = new Role({ role: roles[i] })
            await role.save()
        }
    }
}

module.exports = createAutoRole;