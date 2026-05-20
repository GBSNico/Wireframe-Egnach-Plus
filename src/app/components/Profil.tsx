import { useNavigate } from "react-router";
import { WireframeScreen } from "./WireframeScreen";
import { WireframeButton } from "./WireframeButton";
import { Settings, UserPlus, Shield } from "lucide-react";

export function Profil() {
  const navigate = useNavigate();

  return (
    <WireframeScreen title="Profil" showBack={false}>
      <div className="space-y-6">
        {/* Profile Card */}
        <div className="border-2 border-gray-400 bg-white p-5 space-y-4">
          {/* Profile Image Placeholder */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 border-2 border-gray-400 rounded-full flex items-center justify-center">
              <div className="text-gray-500 text-xs">[Foto]</div>
            </div>
            <div className="flex-1">
              <div className="h-5 bg-gray-800 w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-500 w-1/2"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-3 pt-3 border-t-2 border-gray-300">
            <div className="flex justify-between">
              <div className="h-3 bg-gray-600 w-24"></div>
              <div className="h-3 bg-gray-800 w-32"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 bg-gray-600 w-28"></div>
              <div className="h-3 bg-gray-800 w-36"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 bg-gray-600 w-20"></div>
              <div className="h-3 bg-gray-800 w-28"></div>
            </div>
          </div>
        </div>

        {/* Settings Button */}
        <WireframeButton 
          variant="secondary"
          onClick={() => navigate("/privatsphaere")}
        >
          <div className="flex items-center justify-center gap-3">
            <Settings size={24} />
            <span>Privatsphäre-Einstellungen</span>
          </div>
        </WireframeButton>

        {/* Delegation Section */}
        <div className="border-2 border-gray-500 bg-gray-50 p-5 space-y-4">
          <div className="flex items-start gap-3">
            <Shield size={28} className="text-gray-700 mt-1" />
            <div className="flex-1">
              <div className="h-5 bg-gray-800 w-4/5 mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-600 w-full"></div>
                <div className="h-3 bg-gray-600 w-5/6"></div>
                <div className="h-3 bg-gray-600 w-4/5"></div>
              </div>
            </div>
          </div>

          <WireframeButton variant="primary">
            <div className="flex items-center justify-center gap-3">
              <UserPlus size={24} />
              <span>Vertrauensperson hinzufügen</span>
            </div>
          </WireframeButton>
        </div>

        {/* Existing Trusted Person (if any) */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-700 w-48"></div>
          
          <div className="border-2 border-gray-400 bg-white p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 border border-gray-400 rounded-full"></div>
                <div>
                  <div className="h-4 bg-gray-800 w-32 mb-2"></div>
                  <div className="h-3 bg-gray-500 w-24"></div>
                </div>
              </div>
              <button className="text-gray-600 p-2">
                <div className="w-6 h-6 bg-gray-400"></div>
              </button>
            </div>

            {/* Rights */}
            <div className="border-t-2 border-gray-300 pt-3 space-y-2">
              <div className="h-3 bg-gray-600 w-1/3 mb-3"></div>
              
              {["Profil bearbeiten", "Anfragen erstellen", "Nachrichten verwalten"].map((right, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-500 bg-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-800"></div>
                  </div>
                  <div className="h-3 bg-gray-600 w-36"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-2 border-gray-400 p-4 bg-gray-50">
          <div className="h-3 bg-gray-500 w-full mb-2"></div>
          <div className="h-3 bg-gray-500 w-4/5"></div>
        </div>
      </div>
    </WireframeScreen>
  );
}
