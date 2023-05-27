import { loader } from 'graphql.macro'
export const createUserMutation = loader('./createUser.gql')
export const usersQuery = loader('./users.gql')
export const loginMutation = loader('./login.gql')
export const currentUserQuery = loader('./currentUser.gql')
