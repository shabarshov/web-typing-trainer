const fetchUser = async (path: string, login: string, password: string) => {
  await fetch(`/api/${path}/`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
    headers: { "content-type": "application/json" },
  })
}

export default fetchUser
