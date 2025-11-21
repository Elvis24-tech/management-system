export default function Modal({ property, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-lg relative">
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
          <img src={property.image} alt={property.name} className="h-64 w-full object-cover rounded"/>
          <h2 className="text-2xl font-bold mt-4">{property.name}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-blue-600 font-semibold mt-2">${property.price}/month</p>
          <p className="mt-4 text-gray-700">{property.description}</p>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Rent Now
          </button>
        </div>
      </div>
    );
  }
  