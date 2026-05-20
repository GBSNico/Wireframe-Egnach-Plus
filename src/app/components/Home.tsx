import { useNavigate } from "react-router";
import { WireframeScreen } from "./WireframeScreen";
import { WireframeButton } from "./WireframeButton";
import { HandHeart, Package, Calendar, Users } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  return (
    <WireframeScreen title="Egnach Plus" showBottomNav={true}>
      <div className="space-y-6">
        {/* App Description Placeholder */}
        <div className="border-2 border-gray-300 p-4 bg-gray-50">
          <div className="h-3 bg-gray-300 w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 w-full mb-2"></div>
          <div className="h-3 bg-gray-300 w-2/3"></div>
        </div>

        {/* Main Action - Very Large Button */}
        <div className="space-y-4">
          <WireframeButton 
            variant="large" 
            onClick={() => navigate("/hilfe-anfragen")}
          >
            <div className="flex items-center justify-center gap-3">
              <HandHeart size={32} />
              <span>Hilfe anfragen</span>
            </div>
          </WireframeButton>

          <WireframeButton 
            variant="primary" 
            onClick={() => navigate("/ausleihen")}
          >
            <div className="flex items-center justify-center gap-3">
              <Package size={24} />
              <span>Etwas ausleihen</span>
            </div>
          </WireframeButton>

          <WireframeButton 
            variant="primary" 
            onClick={() => navigate("/anlaesse")}
          >
            <div className="flex items-center justify-center gap-3">
              <Calendar size={24} />
              <span>Anlässe</span>
            </div>
          </WireframeButton>

          <WireframeButton 
            variant="secondary"
          >
            <div className="flex items-center justify-center gap-3">
              <Users size={24} />
              <span>Nachbarschaftshilfe anbieten</span>
            </div>
          </WireframeButton>
        </div>

        {/* Info Box */}
        <div className="border-2 border-gray-400 p-4 mt-6">
          <div className="h-3 bg-gray-400 w-1/2 mb-3"></div>
          <div className="h-3 bg-gray-300 w-full mb-2"></div>
          <div className="h-3 bg-gray-300 w-4/5"></div>
        </div>
      </div>
    </WireframeScreen>
  );
}
