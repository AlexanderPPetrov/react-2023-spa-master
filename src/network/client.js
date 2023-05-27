import { GraphQLClient } from 'graphql-request'
import constants from '../constants'

export const client = new GraphQLClient(constants.graphqlUrl)
