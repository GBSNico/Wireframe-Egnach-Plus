import { useNavigate } from "react-router";
import { WireframeScreen } from "./WireframeScreen";
import { WireframeButton } from "./WireframeButton";
import { Search, SlidersHorizontal } from "lucide-react";

export function Ausleihen() {
  const navigate = useNavigate();

  const items = [
    { name: "[Gegenstand]", category: "[Kategorie]", status: "verfügbar" },
    { name: "[Gegenstand]", category: "[Kategorie]", status: "verfügbar" },
    { name: "[Gegenstand]", category: "[Kategorie]", status: "nicht verfügbar" },
    { name: "[Gegenstand]", category: "[Kategorie]", status: "verfügbar" },
  ];

  return (
    <WireframeScreen title="Ausleihen" showBack={true}>
      <div className="space-y-6">
        {/* Search */}
        <div className="border-2 border-gray-400 bg-white p-4 flex items-center gap-3">
          <Search size={24} className="text-gray-500" />
          <div className="flex-1">
            <div className="h-4 bg-gray-300 w-32"></div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <button className="flex-1 border-2 border-gray-400 bg-white px-4 py-3 flex items-center justify-center gap-2">
            <SlidersHorizontal size={20} className="text-gray-600" />
            <span className="text-gray-900">Filter</span>
          </button>
          
          <button className="border-2 border-gray-400 bg-white px-4 py-3">
            <div className="h-3 bg-gray-700 w-20"></div>
          </button>
        </div>

        {/* Filter Tags Placeholder */}
        <div className="flex gap-2 flex-wrap">
          <div className="border-2 border-gray-400 px-3 py-2 bg-gray-100">
            <div className="h-3 bg-gray-600 w-16"></div>
          </div>
          <div className="border-2 border-gray-400 px-3 py-2 bg-gray-100">
            <div className="h-3 bg-gray-600 w-20"></div>
          </div>
          <div className="border-2 border-gray-400 px-3 py-2 bg-gray-100">
            <div className="h-3 bg-gray-600 w-12"></div>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-4">
          <div className="mb-2">
            <div className="h-4 bg-gray-700 w-48"></div>
          </div>

          {items.map((item, index) => (
            <div key={index} className="border-2 border-gray-400 bg-white p-4 space-y-3">
              {/* Image Placeholder */}
              <div className="bg-gray-200 h-32 border border-gray-400 flex items-center justify-center">
                <div className="text-gray-500 text-sm">[Bild]</div>
              </div>

              {/* Item Info */}
              <div>
                <div className="h-4 bg-gray-800 w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-400 w-1/2"></div>
              </div>

              {/* Calendar/Availability */}
              <div className="border border-gray-300 p-3 bg-gray-50">
                <div className="h-3 bg-gray-500 w-24 mb-2"></div>
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-8 border border-gray-300 ${
                        i % 3 === 0 ? 'bg-white' : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Status & Button */}
              <div className="flex items-center justify-between">
                <div className={`px-3 py-1 border-2 ${
                  item.status === "verfügbar" 
                    ? "border-gray-600 bg-white" 
                    : "border-gray-400 bg-gray-200"
                }`}>
                  <span className="text-sm text-gray-900">{item.status}</span>
                </div>
                
                {item.status === "verfügbar" && (
                  <button 
                    onClick={() => navigate("/angebot-melden")}
                    className="border-2 border-gray-800 bg-gray-800 text-white px-4 py-2 text-sm"
                  >
                    Anfragen
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </WireframeScreen>
  );
}
