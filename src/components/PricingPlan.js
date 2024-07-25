const PricingPlan = ({ title, price, description, credits, buttonText }) => (
  <div className="bg-blue-600 text-white shadow-md rounded-lg p-6 w-80 border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
    <div className="flex items-center mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="text-3xl font-bold mb-4">{price}</div>
    <p className="mb-4">{description}</p>
    <ul className="mb-6">
      <li className="mb-2">{credits} credits</li>
    </ul>
    <button className="transition ease-in-out delay-50 text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-gray-700">
      {buttonText}
    </button>
  </div>
);

export default PricingPlan;
