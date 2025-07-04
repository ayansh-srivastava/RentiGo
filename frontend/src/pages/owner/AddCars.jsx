import React, { useState } from 'react';
import add from '../../assets/image.png';
import cross from '../../assets/cross2.png';

const currentYear = new Date().getFullYear();

const AddCarForm = () => {
  const [carData, setCarData] = useState({
    name: '',
    brand: '',
    model: '',
    year: currentYear,
    city: '',
    plateNumber: '',
    pricePerDay: 0,
    capacity: 1,
    fuelType: '',
    transmission: '',
    description: '',
    features: [],
    listedBy: 1,
    isAvailable: true,
    images: []
  });

  const [tempFeature, setTempFeature] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = ['pricePerDay', 'capacity', 'year'].includes(name)
      ? Math.max(0, parseInt(value) || 0)
      : value;

    setCarData(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleFeatureAdd = () => {
    if (tempFeature.trim() && carData.features.length < 4) {
      setCarData(prev => ({
        ...prev,
        features: [...prev.features, tempFeature.trim()]
      }));
      setTempFeature('');
    }
  };

  const handleFeatureRemove = (index) => {
    setCarData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setCarData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const handleImageRemove = (index) => {
    setCarData(prev => {
      const updated = [...prev.images];
      updated.splice(index, 1);
      return { ...prev, images: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Car:', carData);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-12 rounded-xl shadow mt-12">
      <h2 className="text-4xl font-semibold text-gray-800 mb-10">Add New Car</h2>

      <form onSubmit={handleSubmit} className="space-y-10 text-base">

        <div>
          <label className="block text-gray-700 font-medium mb-3 text-lg">Upload Images</label>
          <label className="flex items-center gap-2 cursor-pointer w-fit bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-300 px-4 py-2 rounded shadow-sm">
            <img src={add} alt="upload" className="w-6 h-6" />
            <span className="text-base font-medium">Choose Images</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <div className="flex gap-4 mt-4 flex-wrap">
            {carData.images.map((img, idx) => (
              <div key={idx} className="relative w-28 h-28">
                <img
                  src={img.preview}
                  alt="preview"
                  className="w-full h-full object-cover rounded border"
                />
                <img
                  src={cross}
                  alt="remove"
                  className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full shadow-md p-[2px] cursor-pointer"
                  
                  onClick={() => handleImageRemove(idx)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Car Name', name: 'name', placeholder: 'e.g. Swift' },
            { label: 'Brand', name: 'brand', placeholder: 'e.g. Maruti' },
            { label: 'Model', name: 'model', placeholder: 'e.g. ZXi' },
            { label: 'Manufacture Year', name: 'year', type: 'number', min: 1990, max: currentYear + 1 },
            { label: 'City', name: 'city', placeholder: 'e.g. Delhi' },
            { label: 'Plate Number', name: 'plateNumber', placeholder: 'e.g. DL01AB1234' },
            { label: 'Price Per Day (₹)', name: 'pricePerDay', type: 'number', min: 0 },
            { label: 'Seating Capacity', name: 'capacity', type: 'number', min: 1, max: 9 },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="text-gray-700 mb-2 block font-medium text-base">{field.label}</label>
              <input
                name={field.name}
                type={field.type || 'text'}
                min={field.min}
                max={field.max}
                value={carData[field.name]}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

          <div>
            <label className="text-gray-700 mb-2 block font-medium text-base">Fuel Type</label>
            <select name="fuelType" value={carData.fuelType} onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Fuel</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>CNG</option>
              <option>Electric</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 mb-2 block font-medium text-base">Transmission</label>
            <select name="transmission" value={carData.transmission} onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Type</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-gray-700 mb-2 block font-medium text-base">Description</label>
          <textarea
            name="description"
            value={carData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe the car in a few words..."
            required
          />
        </div>

        <div>
          <label className="text-gray-700 mb-2 block font-medium text-base">Add Features (max 4)</label>
          <div className="flex items-center gap-3">
            <input
              value={tempFeature}
              onChange={e => setTempFeature(e.target.value)}
              placeholder="e.g. Sunroof"
              className="w-full px-4 py-3 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={handleFeatureAdd}
              disabled={carData.features.length >= 4 || !tempFeature}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium"
            >
              Add
            </button>
          </div>
          <div className="mt-3 flex gap-3 flex-wrap">
            {carData.features.map((feat, idx) => (
              <span
                key={idx}
                className="group flex items-center gap-2 bg-gray-200 text-sm px-3 py-1 rounded-full relative"
              >
                {feat}
                <img
                  src={cross}
                  alt="remove"
                  className="w-3.5 h-3.5 ml-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={() => handleFeatureRemove(idx)}
                />
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded text-lg">
            Submit Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCarForm;
