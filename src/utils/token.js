import Cookies from 'js-cookie'
import { client } from '../network/client'

const tokenCookie = 'authToken'
export const getToken = () => Cookies.get(tokenCookie)
export const saveUserToken = token => {
  Cookies.set(tokenCookie, token, {
    secure: true,
    expires: 1,
  })
  console.log(client)
  client.setHeader('Authorization', `Bearer ${token}`)
}
