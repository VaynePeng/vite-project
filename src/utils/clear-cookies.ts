const clearCookies = (): void => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=')
    document.cookie = cookie[0] + '=;expires=Thu, 21 Sep 1979 00:00:01 UTC;'
  }
}

export default clearCookies
