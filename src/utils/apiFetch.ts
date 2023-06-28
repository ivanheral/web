export type methods = 'GET' | 'PUT' | 'POST' | 'PATCH'

export type iInit = {
  method: methods
  headers: Headers
  body?: string | undefined
}

async function fetchAPI<T>(path: string, method: methods = 'GET', body?: T) {
  const myHeaders = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  })
  const Init: iInit = { method, headers: myHeaders }
  if (body) Init.body = JSON.stringify(body)

  const postsResponse = await fetch(`${path}`, Init)
  if (postsResponse.ok) return postsResponse.json()
  return await Promise.reject()
}

export default fetchAPI
