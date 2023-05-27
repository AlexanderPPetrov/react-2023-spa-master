import { GraphQLClient } from 'graphql-request'
import constants from '../constants'
import { getToken } from '../utils/token'

const token = getToken()
const headers = {}
if (token) {
  headers.Authorization = `Bearer ${token}`
}
export const client = new GraphQLClient(constants.graphqlUrl, {
  headers,
})
