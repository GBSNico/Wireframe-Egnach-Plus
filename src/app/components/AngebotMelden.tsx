import { WireframeScreen } from "./WireframeScreen";
import { WireframeButton } from "./WireframeButton";
import { AlertTriangle } from "lucide-react";

export function AngebotMelden() {
  const reportReasons = [
    "Kommerzielles Angebot",
    "Unangemessener Inhalt",
    "Betrug / Verdacht",
    "Sonstiges"
  ];

  return (
    <WireframeScreen title="Angebot melden" showBack={true}>
      <div className="space-y-6">
        {/* Item Being Reported */}
        <div className="border-2 border-gray-400 bg-white p-4 space-y-3">
          <div className="h-4 bg-gray-600 w-32 mb-3"></div>
          
          <div className="bg-gray-200 h-32 border border-gray-400 flex items-center justify-center">
            <div className="text-gray-500">[Bild des Angebots]</div>
          </div>

          <div>
            <div className="h-5 bg-gray-800 w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-500 w-1/2"></div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="border-2 border-gray-500 bg-gray-100 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={24} className="text-gray-700 mt-1" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-700 w-2/3 mb-3"></div>
              <div className="h-3 bg-gray-600 w-full"></div>
              <div className="h-3 bg-gray-600 w-5/6"></div>
            </div>
          </div>
        </div>

        {/* Report Reasons */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-700 w-48 mb-3"></div>
          
          {reportReasons.map((reason, index) => (
            <button
              key={index}
              className="w-full border-2 border-gray-400 bg-white p-4 min-h-16 flex items-center gap-3 hover:bg-gray-50"
            >
              <div className="w-6 h-6 border-2 border-gray-500 rounded-full bg-white"></div>
              <span className="text-gray-900 text-left">{reason}</span>
            </button>
          ))}
        </div>

        {/* Additional Comments */}
        <div>
          <div className="mb-3">
            <div className="h-4 bg-gray-700 w-40"></div>
          </div>
          
          <div className="border-2 border-gray-400 bg-white p-4 min-h-32">
            <div className="h-3 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 w-1/2"></div>
          </div>
        </div>

        {/* Fair-Use Guidelines */}
        <div className="border-2 border-gray-500 p-4 bg-gray-50 space-y-2">
          <div className="h-4 bg-gray-700 w-1/2 mb-3"></div>
          <div className="h-3 bg-gray-500 w-full"></div>
          <div className="h-3 bg-gray-500 w-full"></div>
          <div className="h-3 bg-gray-500 w-4/5"></div>
          
          <ul className="space-y-2 pt-2">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-1.5"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-500 w-5/6"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <WireframeButton variant="large">
          Meldung absenden
        </WireframeButton>

        {/* Cancel Button */}
        <WireframeButton variant="secondary">
          Abbrechen
        </WireframeButton>
      </div>
    </WireframeScreen>
  );
}
