import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import NoonHutLogo from "../assets/NOON_HUT.png"

import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai"

const Login = () => {
  const navigate = useNavigate()

  const IS_USER_LOGGED_IN = localStorage.getItem("USER_LOGGED_IN")

  useEffect(() => {
    if (IS_USER_LOGGED_IN) {
      navigate("/dashboard", { replace: true })
    }
  }, [])

  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: ""
    }
  })

  const handleFormSubmission = async (values) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/admin/login`, values, {
        withCredentials: true
      })

      if (res.status === 200) {
        localStorage.setItem("USER_LOGGED_IN", true)
        navigate("/dashboard", { replace: true })
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(handleFormSubmission)} className="flex flex-col">
        <img src={NoonHutLogo} alt="Noon Hut Logo" className="" />
        <p className="text-3xl font-semibold text-center my-6">Admin Login</p>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="Username"
          value={watch("username", false)}
          className="shadow border-[1px] rounded-md w-full py-3 px-1"
          {...register("username", { required: "Username is required" })}
        />
        <span className="text-red-500 text-sm mt-2 mb-5">{errors.username && errors.username.message}</span>

        <div className="relative">
          <input
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={watch("password", false)}
            className="shadow border-[1px] rounded-md w-full py-3 px-1"
            {...register("password", { required: "Password is required" })}
          />
          {
            showPassword
            &&
            <button type="button" onClick={() => setShowPassword(false)}>
              <AiFillEye className="absolute right-4 top-[27%]" size={25} />
            </button>
          }
          {
            !showPassword
            &&
            <button type="button" onClick={() => setShowPassword(true)}>
              <AiTwotoneEyeInvisible className="absolute right-4 top-[27%]" size={25} />
            </button>
          }
        </div>
        <span className="text-red-500 text-sm mt-2 mb-5">{errors.password && errors.password.message}</span>

        <button type="submit" className="shadow bg-green-600 hover:bg-green-500 hover:cursor-pointer text-white py-3 w-full mb-5 rounded text-lg">Login</button>
      </form>
      <p>Copyright © <a href="#" className="text-gray-600">Noon Hut</a></p>
    </div>
  )
}

export default Login