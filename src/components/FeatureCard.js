const FeatureCard = ({ imgSrc, altText, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
    <img src={imgSrc} alt={altText} className="mx-auto mb-4 rounded-t-lg" />
    <p className="text-sm text-center">{text}</p>
  </div>
);

export default FeatureCard;
