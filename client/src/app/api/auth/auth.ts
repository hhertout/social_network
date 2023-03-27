import { ILogin, ISignup } from "@/types/auth"

export const login = async ({ email, password }: ILogin) => {
  try {
    const route = `${process.env.SERVER_URL}/auth/login`

    const res = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credientials: "include",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await res.json()
    return data
  } catch (err: any) {
    console.error(err)
  }
}

export const signup = async ({ email, password, username, firstname, lastname }: ISignup) => {
  try {
    const route = `${process.env.SERVER_URL}/auth/signup`

    const res = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credientials: "include",
      },
      body: JSON.stringify({
        email,
        password,
        username,
        firstname,
        lastname,
      }),
    })

    const data = await res.json()
    return data
  } catch (err: any) {
    console.error(err)
  }
}
