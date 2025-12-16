import { LogIn, Send, X, KeyRound, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [rememberMe, setRememberMe] = useState(false)

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Очищаем ошибку при изменении поля
    if (errors[name])  {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Валидация email
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email'
    }
    
    // Валидация пароля
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Login form submitted:', { ...formData, rememberMe })
      // Логика авторизации
    }
  }

  const handleClear = () => {
    setFormData({
      email: '',
      password: ''
    })
    setErrors({})
    setRememberMe(false)
  }

  const handleGoogleLogin = () => {
    console.log('Google login clicked')
    // Логика авторизации через Google
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
    // Логика восстановления пароля
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-md">  
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Login</h1>
            <p className="text-gray-600">Welcome back to your account</p>
          </div>

          {/* Поля формы */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address: <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border  text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password: <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border  text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Запомнить меня и забыли пароль */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Основные кнопки */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              className="flex items-center justify-center bg-black text-white px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors  flex-1"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </button>
            
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center justify-center bg-gray-200 text-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-300 transition-colors  flex-1"
            >
              <X className="w-4 h-4 mr-2" />
              Clear
            </button>
          </div>

          {/* Google кнопка */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full border border-gray-300 text-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors "
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Разделитель */}
          {/* <div className="relative pt-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div> */}

          {/* Регистрация */}
          <div className="  border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Don't have an account?</p>
            <Link to='/registration'>
              <button
                type="button"
                className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors "
              >
                <Send className="w-4 h-4 mr-2" />
                Create Account
              </button>
            </Link>
          </div>

          {/* Примечание об обязательных полях */}
          <div className="">
            <p className="text-sm text-gray-500 text-center">
              <span className="text-red-500">*</span> Required Fields
            </p>
          </div>
        </form>

      </div>
    </div>
  )
}