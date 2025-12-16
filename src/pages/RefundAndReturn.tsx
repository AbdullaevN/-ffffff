import React from 'react';

const RefundAndReturn = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Заголовок */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extralight mb-4 tracking-tight">Refund and Return</h1>
          <div className="w-20 h-1 bg-black mb-6"></div>
        </div>

        {/* Основной контент */}
        <div className="prose prose-lg max-w-none">
          
          {/* Раздел Returns */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Returns
            </p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our policy lasts 7 days. If 7 days have gone by since your purchase, unfortunately, we can't offer you a refund or exchange.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 pl-6 py-4 pr-4 my-6">
                <p className="font-medium text-gray-800 mb-2">
                  IMPORTANT RETURN PERIOD:
                </p>
                <p className="text-gray-700">
                  Returns are only accepted within 7 days of purchase date. After this period, no returns or exchanges can be processed.
                </p>
              </div>

              <p>
                To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Item needs to be faulty to be eligible to return.
              </p>
              
              <p>
                Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
              </p>
            </div>
          </section>

          {/* Раздел Additional non-returnable items */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Additional non-returnable items:
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span>Gift cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span>Downloadable software products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span>Some health and personal care items</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-6">
                To complete your return, we require a receipt or proof of purchase.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                <h4 className="font-bold text-yellow-800 mb-3">IMPORTANT RETURN PROCEDURE:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">⚠</span>
                    <span>Please do not send your purchase back to the manufacturer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">⚠</span>
                    <span>Please do not send your purchase to us without creating a claim. You have to return it with claim number otherwise you will not have any refund or exchange.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Раздел Partial Refunds */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Partial Refunds (if applicable)
            </p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                There are certain situations where only partial refunds are granted:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3">•</span>
                    <span>Book with obvious signs of use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3">•</span>
                    <span>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3">•</span>
                    <span>Any item not in its original condition is damaged or missing parts for reasons not due to our error</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3">•</span>
                    <span>Any item that is returned more than 5 days after delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Раздел Refunds */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Refunds (if applicable)
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              
              <p>
                If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
              </p>
            </div>
          </section>

          {/* Раздел Late or missing refunds */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Late or missing refunds (if applicable)
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you haven't received a refund yet, first check your bank account again.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 pr-4 my-4">
                <p className="font-medium text-gray-800 mb-2">Refund Processing Steps:</p>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">1.</span>
                    <span>Then contact your credit card company, it may take some time before your refund is officially posted.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">2.</span>
                    <span>Next, contact your bank. There is often some processing time before a refund is posted.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">3.</span>
                    <span>If you've done all of this and you still have not received your refund yet, please contact us at support@FFFFFF.com.</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Раздел Sale items */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Sale items (if applicable)
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="font-bold text-red-800 mb-2">NO REFUNDS ON SALE ITEMS:</p>
                <p>
                  Only regular priced items may be refunded, unfortunately, sale items cannot be refunded. Sales items are final sale and not eligible for return or refunds.
                </p>
              </div>
            </div>
          </section>

          {/* Раздел Exchanges */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Exchanges (if applicable)
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@FFFFFF.com.
              </p>
            </div>
          </section>

          {/* Раздел Gifts */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Gifts
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
              </p>
              
              <p>
                If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
              </p>
            </div>
          </section>

          {/* Раздел Shipping */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              Shipping
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                To return your product, you should email us first to create a return request then we will send you the information.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg my-4">
                <h4 className="font-bold text-gray-800 mb-3">Return Shipping Information:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>You will be responsible for paying for your own shipping costs for returning your item.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Depending on where you live, the time it may take for your exchanged product to reach you may vary.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Контактная информация */}
          <section className="mb-10">
            <p className="text-2xl md:text-3xl font-extralight uppercase tracking-wide mb-6">
              NEED HELP WITH A RETURN?
            </p>
            
            <div className="space-y-4 text-gray-700">
              <p>
                For any questions about returns, refunds, or exchanges, please contact our support team:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-medium">Returns Department</p>
                <p className="text-gray-600">Email: support@FFFFFF.com</p>
                <p className="text-gray-600">Please include your order number in all communications</p>
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

export default RefundAndReturn;