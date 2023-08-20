CookieHelper is a easy and light weight ""library"" to help you mange your cookies in a easyer way 


this library is a set of 5 functions

- getCookie

``` 
export const getCookie = (key, split = false) => {
  let checkcookie = document.cookie.includes(`${key}=`)
  let response = !checkcookie ? ("") : (document.cookie.split("; ").find((element) => element.startsWith(`${key}=`)).split("=")[1])
  return !split ? (response) : (response.split(",").filter((element) => element != ""))
}
```
for getting a single key of you cookies

- addToCokie

```
export const addToCookie = (key, value, date = undefined) => {
  let savedValue = getCookie(key, true)
  savedValue.push(value)
  setCookie(key, savedValue, date)
}
```

- example 

```

const AddToCart = () => {
  CookieHelper.addToCookie("cartItems", id)
}

```

- setCookie

```
export const setCookie = (key, value, date = new Date ("Fri, 31 Dec 9999 22:59:59 GMT")) => {
  document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`
}
```

an easy way to add a new cookie

- example

```
CookieHelper.addToCookie("cartItems", props._id)
```

- getCookies 

```
export const getCookies = () => {
  let cookieNames = document.cookie.split("; ").map((element) => element.split("=")[0])
  return cookieNames
}
```

a fast and easy way to get a splitted array of all your cookies


- excample

```
cookieHelper.getCookies()

will return {
  all the keys of your cookies
}
```

- clearCookies 

```
export const clearCookies = () => {
  let date = new Date (Date.now()-1)
  getCookies().forEach(element => {
    setCookie(element, "", date)
  });
}
```

used to drop all the cookies on your list by setting the expiration date by -1s 

- eaxmple

```
if (userState === "unauthenticated"){
  cookieHelper.clearCookies()
}
```