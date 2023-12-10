const fetchUser = async (path: string, login: string, password: string) => {
  return await fetch(`/api/${path}/`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
    headers: { "content-type": "application/json" },
  })
  // .then((res) => res.json())
  // .then((data) => data.user_id)
}

export default fetchUser
