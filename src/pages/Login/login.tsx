/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function Login () {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string | undefined>('')
  const [password, setPassword] = useState<string | undefined>('')

  const validate = async (e: any) => {
    e.preventDefault()
    try {
      const inputUsername = username
      const inputPassword = password

      if (inputUsername === 'admin@gmail.com' && inputPassword === 'admin') {
        await toast.success('Successfull!')
        navigate('/home')
      } else {
        toast.error('Please enter correct username or password!')
      }
    } catch (err) {
      console.log('Error: ', err)
      toast.error('Error occured !')
    }
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-600">
            ICAAT Dashboard
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                name="username"
                id="username"
                value={username}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                name="password"
                id="password"
                value={password}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                type="button"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={validate}
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?
            <a href="#" className="font-medium text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
