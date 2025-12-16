const Faq = () => {
 const faqItems = [
    {
      question: "How do I place an order?",
      answer: "First, click on the product image or product name to view the item details. Choose the color or size, then enter the quantity you want to purchase. You can click the 'buy now' button to proceed to checkout directly, or 'add to cart' and buy later with other items. You can view your cart by clicking on the cart button in the upper right-hand section of every page."
    },
    {
      question: "How do you calculate your shipping and handling charges?",
      answer: "We offer free shipping and handling for all products in our store."
    },
    // {
    //   question: "What shipping options are available?",
    //   answer: "Usually, we use Front Door Package Delivery (e.g., FedEx, UPS or USPS) to your delivery address."
    // },
    // {
    //   question: "Do you ship to PO Boxes, APO/FPO/DPO, Alaska, Hawaii or Puerto Rico?",
    //   answer: "Currently, we only ship to the 48 contiguous states within the United States, excluding PO boxes, APO, FPO, DPO addresses, Alaska, Hawaii, and Puerto Rico."
    // },
    // {
    //   question: "When will my order be delivered?",
    //   answer: "In general, your order will be delivered by a third-party provider (e.g. FedEx, UPS, or USPS) to your doorstep to the address you have given. Depending on the workload of the shipping company, shipping takes 5-8 business days. * Please be noted that all information regarding the shipping duration is estimated. We cannot guarantee that your order will arrive on a specific day."
    // },
    // {
    //   question: "How do I track my order?",
    //   answer: "After you placed an order, you will receive email updates about your order. The 'Order Confirmation' email confirms that we have received your order. The order number and product information will be included. The 'Shipment Confirmation' email confirms that your order has shipped, and tracking information will be included. The arrival time of your items depends on the designated shipping method and your shipping location."
    // }
  ];

  return (
    <div className="min-h-screen bg-white pt-5 pb-5">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extralight mb-2 tracking-tight">FAQ</h1>
          <div className="w-20 h-0.5 bg-black mb-8"></div>
        </div>

        {/* Простой список с рамками */}

        <div className="space-y-6 border border-gray-300 rounded-lg">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className=" px-5 py-3 hover:border-gray-400 transition-colors"
            >
              <h3 className=" font-extralight text-gray-900 ">
                {item.question}
              </h3>
              <div className="pl-4 text-gray-900 font-extralight ">
                <p className="text-gray-900  ">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;