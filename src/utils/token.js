import Cookies from 'js-cookie'
const tokenCookie = 'authToken'
export const getToken = () => Cookies.get(tokenCookie)
export const saveUserToken = token => {
  Cookies.set(tokenCookie, token, {
    secure: true,
    expires: 1,
  })
}
export const removeUserToken = () => {
  Cookies.remove(tokenCookie)
}
