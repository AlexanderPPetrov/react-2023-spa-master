import { useQuery } from 'react-query'
import axios from 'axios'
import constants from '../constants'

export function useDiscoverMovie({ sort_by, with_genres }) {
  return useQuery('movies', async () => {
    const { data } = await axios.get(`${constants.baseUrl}/discover/movie`, {
      params: {
        api_key: constants.apiKey,
        language: 'en-US',
        sort_by,
        include_adult: false,
        with_genres,
        page: 1,
      },
    })
    return data
  })
}
