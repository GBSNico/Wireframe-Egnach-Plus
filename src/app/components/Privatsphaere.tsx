import { WireframeScreen } from "./WireframeScreen";
import { Eye } from "lucide-react";

export function Privatsphaere() {
  const privacySettings = [
    { label: "Name anzeigen", description: "Dein vollständiger Name" },
    { label: "Profilbild anzeigen", description: "Dein Foto" },
    { label: "Wohnquartier anzeigen", description: "Dein Quartier in Egnach" },
    { label: "Telefonnummer anzeigen", description: "Deine Kontaktnummer" },
    { label: "Meine Angebote öffentlich", description: "Andere können deine Hilfsangebote sehen" },
  ];

  return (
    <WireframeScreen title="Privatsphäre" showBack={true}>
      <div className="space-y-6">
        {/* Info Header */}
        <div className="border-2 border-gray-400 p-5 bg-gray-100">
          <div className="flex items-start gap-3 mb-3">
            <Eye size={24} className="text-gray-600 mt-1" />
            <div className="flex-1">
              <div className="h-4 bg-gray-700 w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-500 w-full mb-2"></div>
              <div className="h-3 bg-gray-500 w-4/5"></div>
            </div>
          </div>
        </div>

        {/* Settings List */}
        <div className="space-y-1">
          {privacySettings.map((setting, index) => (
            <div key={index} className="border-2 border-gray-300 bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="h-4 bg-gray-800 w-3/5 mb-2"></div>
                  <div className="h-3 bg-gray-400 w-4/5"></div>
                </div>

                {/* Toggle Switch Placeholder */}
                <div className="flex items-center">
                  <div className="w-14 h-8 border-2 border-gray-400 bg-gray-200 rounded-full relative">
                    <div className="absolute right-1 top-1 w-5 h-5 bg-white border border-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="border-2 border-gray-400 p-4 bg-gray-50 space-y-2">
          <div className="h-3 bg-gray-600 w-2/3 mb-3"></div>
          <div className="h-3 bg-gray-400 w-full"></div>
          <div className="h-3 bg-gray-400 w-5/6"></div>
          <div className="h-3 bg-gray-400 w-3/4"></div>
        </div>

        {/* Note Box */}
        <div className="border-2 border-gray-500 p-4 bg-white">
          <div className="h-3 bg-gray-700 w-4/5 mb-2"></div>
          <div className="h-3 bg-gray-500 w-full"></div>
        </div>
      </div>
    </WireframeScreen>
  );
}
