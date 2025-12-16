import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Хлебные крошки */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-medium">Contact</span>
          </nav>
        </div>

        {/* Заголовок */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Contact</h1>
          <div className="w-20 h-1 bg-black mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Левая колонка - Информация */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-8">INFORMATION</h2>
            
            <div className="space-y-8">
              {/* Контактная информация */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide">CONTACT US</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a 
                        href="mailto:yarn.international.llc@gmail.com" 
                        className="text-gray-800 hover:text-black transition-colors text-lg"
                      >
                        yarn.international.llc@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="text-gray-800 text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address</p>
                      <p className="text-gray-800 text-lg">123 Business Street, Suite 100</p>
                      <p className="text-gray-600">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Часы работы */}
              <div>
                <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">BUSINESS HOURS</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - Форма */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-8">CONTACT US</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Имя и Email в одной строке */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-black"
                    placeholder="Your name"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-black"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Телефон */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-black"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Сообщение */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message: <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-black resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </button>
                
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex items-center justify-center bg-gray-200 text-gray-800 px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-300 transition-colors w-full sm:w-auto"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear
                </button>
              </div>

              {/* Примечание об обязательных полях */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="text-red-500">*</span> Required Fields
                </p>
              </div>
            </form>

            {/* Дополнительная информация */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">RESPONSE TIME</h3>
              <p className="text-gray-600 text-sm">
                We strive to respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* Карта (опционально) */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">FIND US</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Map integration would go here</p>
              <p className="text-sm text-gray-500 mt-2">123 Business Street, San Francisco, CA</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;