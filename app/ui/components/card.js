import { FaLaptop, FaMobileAlt, FaPencilRuler, FaVectorSquare } from 'react-icons/fa';

const Card = ({ title, description, Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-start items-start text-orange-500 text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 ">{title}</h3>
      <p className="text-gray-600 ">{description}</p>
    </div>
  );
};

export default Card;
