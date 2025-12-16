import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Заголовок */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extralight mb-4 tracking-tight">Privacy policy</h1>
          <div className="w-20 h-1 bg-black mb-6"></div>
        </div>

        {/* Основной контент */}
        <div className="prose prose-lg max-w-none">
          
          {/* Раздел PRIVACY STATEMENT */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              PRIVACY STATEMENT
            </p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Thank you for using EFFEF! We wrote this policy to help you understand what information we collect, the purposes for which we collect it, how we use it, and what choices you have regarding your information.
              </p>
              
              {/* Важное примечание */}
              <div className="bg-gray-50 border-l-4 border-gray-300 pl-6 py-4 pr-4 my-8">
                <p className="font-semifont-extralight text-gray-800 mb-2">
                  NOTE TO ALL USERS, INCLUDING INTERNATIONAL USERS:
                </p>
                <p className="text-gray-700">
                  If you use our Site or Applications (as defined below) by visiting them or placing orders through them, whether from outside of the United States or not, you understand that you are voluntarily providing information to us and are accepting the practices described in this Privacy Policy. For those using the Site or Applications from outside the United States, you understand and agree that information we collect from you may be stored within or outside the United States or your home country, or may be transferred to the United States. The Site is subject to United States laws, which may not afford the same level of protection as those in your country.
                </p>
              </div>
              
              <p className="text-lg">
                EEEEE provides this Privacy Policy to inform you of our policies.
              </p>
            </div>
          </section>

          {/* Дополнительные разделы (можно добавить позже) */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              INFORMATION WE COLLECT
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                We collect information you provide directly to us. For example, we collect information when you create an account, make a purchase, communicate with us via third-party social media sites, request customer support, or otherwise communicate with us.
              </p>
              <p>
                The types of information we may collect include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              HOW WE USE INFORMATION
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                We use the information we collect to provide, maintain, and improve our services, to process transactions and send related information, to send you technical notices and support messages, to respond to your comments and questions, to communicate with you about products and services, and to monitor and analyze trends and usage.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              CONTACT US
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-medium">EEEEE</p>
                <p className="text-gray-600">Email: privacy@eeeee.com</p>
                <p className="text-gray-600">Address: 123 Privacy Street, San Francisco, CA 94107</p>
              </div>
            </div>
          </section>

          <div className="text-sm text-gray-500 pt-8 mt-8 border-t border-gray-200">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;