export const getCookie = (key, split = false) => {
  let checkcookie = document.cookie.includes(`${key}=`)
  let response = !checkcookie ? ("") : (document.cookie.split("; ").find((element) => element.startsWith(`${key}=`)).split("=")[1])
  return !split ? (response) : (response.split(",").filter((element) => element != ""))
}
 
export const addToCookie = (key, value, date = undefined) => {
  let savedValue = getCookie(key, true)
  savedValue.push(value)
  setCookie(key, savedValue, date)
}

export const setCookie = (key, value, date = new Date ("Fri, 31 Dec 9999 22:59:59 GMT")) => {
  document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`
}

export const getCookies = () => {
  let cookieNames = document.cookie.split("; ").map((element) => element.split("=")[0])
  return cookieNames
}

export const clearCookies = () => {
  let date = new Date (Date.now()-1)
  getCookies().forEach(element => {
    setCookie(element, "", date)
  });
}

const CookieHelper = {
  getCookie,
  getCookies,
  setCookie,
  addToCookie,
  clearCookies,
}

export default CookieHelper