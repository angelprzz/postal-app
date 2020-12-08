const postsResolvers = require('./post')
const usersResolvers = require

module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}