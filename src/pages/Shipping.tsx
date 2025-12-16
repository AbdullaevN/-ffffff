
const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Заголовок */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extralight mb-4 tracking-tight">Shipping policy</h1>
          <div className="w-20 h-1 bg-black mb-6"></div>
        </div>

        {/* Основной контент */}
        <div className="prose prose-lg max-w-none">
          
          {/* Раздел Regular Shipping estimates */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Regular Shipping estimates:
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This refers to the time it takes for items to be shipped from our warehouse to the destination
              </p>
              
              {/* Таблица */}
              <div className="overflow-x-auto my-8">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 border-b border-r border-gray-300 text-left font-medium">Region</th>
                      <th className="py-3 px-4 border-b border-gray-300 text-left font-medium">Free Tracked Shipping</th>
                      <th className="py-3 px-4 border-b border-l border-gray-300 text-left font-medium">Estimated Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 border-r border-gray-300 font-medium">UNITED STATES</td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-green-600 font-bold">✔</span>
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">7 - 25 Business Days</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 border-r border-gray-300 font-medium">EUROPE</td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-green-600 font-bold">✔</span>
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">9 - 27 Business Days</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 border-r border-gray-300 font-medium">OCEANIA</td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-gray-400">-</span>
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">-</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 border-r border-gray-300 font-medium">SOUTH-EAST ASIA</td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-green-600 font-bold">✔</span>
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">15 - 27 Business Days</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-r border-gray-300 font-medium">ALL OTHER COUNTRY</td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-green-600 font-bold">✔</span>
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">17 - 35 Business Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Пункты списка */}
              <div className="space-y-3 my-8">
                <div className="flex items-start">
                  <span className="text-gray-800 mr-3">⦁</span>
                  <p>Shipping is quicker than listed in most cases.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gray-800 mr-3">⦁</span>
                  <p>
                    Order verification, tailoring, quality check and packaging. All orders are sent to the manufacturer for dispatch within 24 hours after the order is placed. Processing time 2 - 6 days.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gray-800 mr-3">⦁</span>
                  <p>Tracking numbers sent by email after a short processing period.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gray-800 mr-3">⦁</span>
                  <p>
                    Any items not received within 14 weeks qualify for a full refund or reship immediately. The customer has to reach out to us to have a refund for the order has not been delivered within 14 weeks. Otherwise, we will reship the order.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gray-800 mr-3">⦁</span>
                  <p>Please contact us for any further questions and our team will be happy to assist.</p>
                </div>
              </div>

              {/* Гарантия */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-2xl mr-2">⭐</span>
                  <h3 className="text-xl font-bold text-yellow-800">Item Delivery Guaranteed or Your Money Back!</h3>
                  <span className="text-yellow-500 text-2xl ml-2">⭐</span>
                </div>
                <p className="text-center text-gray-700">
                  We stand behind our shipping promises. If your item doesn't arrive within the estimated timeframe, you'll get a full refund.
                </p>
              </div>
            </div>
          </section>

          {/* Дополнительные разделы */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              SHIPPING FAQ
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium text-gray-800">How can I track my order?</p>
                <p className="text-gray-600 mt-1">Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website.</p>
              </div>
              
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium text-gray-800">Do you offer express shipping?</p>
                <p className="text-gray-600 mt-1">Currently, we only offer the shipping methods listed above. All shipments include free tracking.</p>
              </div>
              
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium text-gray-800">What if my package is lost or damaged?</p>
                <p className="text-gray-600 mt-1">Contact our support team immediately. We'll help you file a claim with the carrier or send a replacement.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              IMPORTANT NOTES
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                Business days exclude weekends and public holidays. Delivery times may be affected by customs clearance, weather conditions, or other unforeseen circumstances.
              </p>
              <p>
                Please ensure your shipping address is correct before placing your order. We are not responsible for packages sent to incorrect addresses provided by the customer.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              CONTACT US
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                For shipping inquiries or issues, please contact our support team:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-medium">Shipping Department</p>
                <p className="text-gray-600">Email: shipping@ffffff.com</p>
                <p className="text-gray-600">Response Time: Within 24-48 business hours</p>
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

export default ShippingPolicy;