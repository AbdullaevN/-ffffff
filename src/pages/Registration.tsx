import { LogIn, Send, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    // Валидация email
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email'
    }
    
    // Валидация пароля
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    // Валидация подтверждения пароля
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    // Валидация телефона
    if (formData.phone && !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Form submitted:', formData)
      // Логика отправки формы
      // Например: API запрос на регистрацию
    }
  }

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
  }

  const handleGoogleLogin = () => {
    console.log('Google login clicked')
    // Логика авторизации через Google
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-md">  
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Registration</h1>
            <p className="text-gray-600">Create your account</p>
          </div>

          {/* Поля формы */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-xs text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-xs text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number: <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-xs text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="0501113371"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password: <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-xs text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password: <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-xs text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              className="flex items-center justify-center bg-black text-white px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors rounded-xs flex-1"
            >
              <Send className="w-4 h-4 mr-2" />
              Register
            </button>
            
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center justify-center bg-gray-200 text-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-300 transition-colors rounded-xs flex-1"
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
              className="flex items-center justify-center w-full border border-gray-300 text-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors rounded-xs"
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

          {/* Уже есть аккаунт? */}
          <div className="pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Already have an account?</p>
            <Link to='/login'>
              <button
                type="button"
                className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors rounded-xs"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
            </Link>
          </div>

          {/* Примечание об обязательных полях */}
          <div className="pt-4">
            <p className="text-sm text-gray-500 text-center">
              <span className="text-red-500">*</span> Required Fields
            </p>
          </div>
        </form>

      </div>
    </div>
  )
}