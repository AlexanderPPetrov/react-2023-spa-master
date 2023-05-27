import { client } from '../network/client'
import { currentUserQuery } from '../graphql/user'
import { useQuery } from 'react-query'

export const useCurrentUser = () => {
  const { data, isLoading, isFetching } = useQuery(
    'currentUser',
    () => {
      return client.request(currentUserQuery)
    },
    { retry: false },
  )

  return {
    data,
    isLoading,
    isFetching,
  }
}
