import { WireframeScreen } from "./WireframeScreen";
import { WireframeButton } from "./WireframeButton";
import { Bell, SlidersHorizontal, MapPin } from "lucide-react";

export function Anlaesse() {
  const events = [
    { title: "[Event Name]", date: "[Datum]", location: "[Ort]" },
    { title: "[Event Name]", date: "[Datum]", location: "[Ort]" },
    { title: "[Event Name]", date: "[Datum]", location: "[Ort]" },
    { title: "[Event Name]", date: "[Datum]", location: "[Ort]" },
  ];

  return (
    <WireframeScreen title="Lokale Anlässe" showBack={true}>
      <div className="space-y-6">
        {/* Notification Button */}
        <WireframeButton variant="primary">
          <div className="flex items-center justify-center gap-3">
            <Bell size={24} />
            <span>Benachrichtigungen aktivieren</span>
          </div>
        </WireframeButton>

        {/* Filters */}
        <div className="flex gap-3">
          <button className="flex-1 border-2 border-gray-400 bg-white px-4 py-3 flex items-center justify-center gap-2">
            <span className="text-gray-900">Datum</span>
          </button>
          
          <button className="flex-1 border-2 border-gray-400 bg-white px-4 py-3 flex items-center justify-center gap-2">
            <SlidersHorizontal size={20} className="text-gray-600" />
            <span className="text-gray-900">Kategorie</span>
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          <div className="mb-2">
            <div className="h-4 bg-gray-700 w-40"></div>
          </div>

          {events.map((event, index) => (
            <div key={index} className="border-2 border-gray-400 bg-white p-5 space-y-4">
              {/* Event Image Placeholder */}
              <div className="bg-gray-200 h-40 border border-gray-400 flex items-center justify-center">
                <div className="text-gray-500">[Event Bild]</div>
              </div>

              {/* Event Title */}
              <div>
                <div className="h-5 bg-gray-800 w-4/5 mb-2"></div>
              </div>

              {/* Event Date */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-500"></div>
                <div className="h-3 bg-gray-600 w-32"></div>
              </div>

              {/* Event Location */}
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-gray-500" />
                <div className="h-3 bg-gray-600 w-40"></div>
              </div>

              {/* Action Button */}
              <WireframeButton variant="secondary">
                Mehr erfahren
              </WireframeButton>

              {/* Category Tag */}
              <div className="flex gap-2">
                <div className="border border-gray-400 px-3 py-1 bg-gray-100">
                  <div className="h-3 bg-gray-600 w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="border-2 border-gray-400 p-4 bg-gray-50">
          <div className="h-3 bg-gray-400 w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-300 w-full mb-2"></div>
          <div className="h-3 bg-gray-300 w-3/4"></div>
        </div>
      </div>
    </WireframeScreen>
  );
}
