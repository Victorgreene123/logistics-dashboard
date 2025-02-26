import { useState, useMemo } from "react";
import carImage from "../assets/car.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useTheme } from "../context/themecontext.jsx";

const fleetData = [
  { id: "19212494884013", type: "Ford Transit", plate: "AN 74 YY", status: "On The Way", load: 85, location: { lat: -6.914744, lng: 107.60981 } },
  { id: "02394852902945", type: "Mercedes Benz Vito", plate: "B 711 RR", status: "Loading", load: 60, location: { lat: -6.921, lng: 107.617 } },
  { id: "00873457821324", type: "Mercedes Benz Sprinter", plate: "G 421 NG", status: "On The Way", load: 75, location: { lat: -6.927, lng: 107.623 } },
];

export default function LogisticsDashboard() {
  const [selectedFleet, setSelectedFleet] = useState(fleetData[0]);
  const [search, setSearch] = useState("");
  const { theme } = useTheme();

  const filteredFleet = fleetData.filter((fleet) =>
    fleet.id.toLowerCase().includes(search.toLowerCase()) || 
    fleet.type.toLowerCase().includes(search.toLowerCase())
  );

  const mapMemo = useMemo(() => (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "12px" }} center={selectedFleet.location} zoom={14}>
        <Marker position={selectedFleet.location} />
      </GoogleMap>
    </LoadScript>
  ), [selectedFleet.location]);

  return (
    <div className={`p-8 grid grid-cols-1 md:grid-cols-3 gap-6`}> 
      {/* Fleet List */}
      <div className={`p-6 rounded-lg shadow-xl ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}> 
        <input 
          type="text" 
          placeholder="Search Fleet ID or Type" 
          className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filteredFleet.map((fleet) => (
            <li 
              key={fleet.id} 
              className={`p-4 mb-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-300 ${
                selectedFleet.id === fleet.id ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => setSelectedFleet(fleet)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{fleet.type} - {fleet.plate}</span>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${fleet.status === "On The Way" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}`}>{fleet.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Selected Fleet Details */}
      <div className={`p-6 rounded-lg shadow-xl flex flex-col items-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}> 
        <h2 className="text-2xl font-bold mb-4">{selectedFleet.type}</h2>
        <img src={carImage} alt="Car" className="w-40 h-24 object-cover rounded-lg mb-4 shadow-lg" />
        <div className="relative w-48 h-8 bg-gray-200 rounded-lg overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold flex items-center justify-center rounded-lg" 
            style={{ width: `${selectedFleet.load}%` }}
          >
            {selectedFleet.load}%
          </div>
        </div>
        <p className="mt-4 font-medium">Plate: {selectedFleet.plate}</p>
        <p className="text-gray-600">Payload: {Math.round(selectedFleet.load * 10)}Kg</p>
        <p className="text-gray-600">Max Load Volume: {Math.round(selectedFleet.load * 0.15)}m³</p>
      </div>

      {/* Fleet Tracking Details */}
      <div className={`p-6 rounded-lg shadow-xl ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}> 
        <h2 className="text-2xl font-bold mb-4">Fleet Tracking Details</h2>
        <p className="text-gray-600">From: <span className="font-medium">129 Yosh Warehouse Cibaduyut</span></p>
        <p className="text-gray-600">To: <span className="font-medium">137 Warehouse New Palapa</span></p>
        <p className="text-gray-600">Average Speed: <span className="font-medium">70Km/h</span></p>
        <p className="text-gray-600">Distance: <span className="font-medium">320Km / 500Km</span></p>
        <div className="mt-4 w-full h-48 rounded-lg overflow-hidden shadow-lg">
          {mapMemo}
        </div>
      </div>
    </div>
  );
}
