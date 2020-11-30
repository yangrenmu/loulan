/**
 * 将 query 解析成对象
 * @param {query} url
 * @return {object} 返回值是个对象
 */

const queryString = (params: string) => {
  let url = params || location.search
  url = url.substring(url.lastIndexOf('?') + 1)
  if (!url) {
    return {}
  }
  const res: any = {}
  const strArr = url.split('&').filter((i) => i !== '')
  strArr.forEach((str) => {
    const key = str.split('=')[0]
    const value = decodeURIComponent(str.split('=')[1])
    res[key] = value
  })
  return res
}

export { queryString }
