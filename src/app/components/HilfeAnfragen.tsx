import { WireframeScreen } from "./WireframeScreen";
import { WireframeButton } from "./WireframeButton";
import { Mic, ShoppingCart, Leaf, Truck, MoreHorizontal } from "lucide-react";

export function HilfeAnfragen() {
  return (
    <WireframeScreen title="Hilfe anfragen" showBack={true}>
      <div className="space-y-6">
        {/* Instruction */}
        <div className="border-2 border-gray-300 p-4 bg-gray-50">
          <div className="h-3 bg-gray-400 w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 w-full"></div>
        </div>

        {/* Category Selection */}
        <div>
          <div className="mb-3">
            <div className="h-4 bg-gray-700 w-32"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="border-2 border-gray-400 bg-white p-6 min-h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50">
              <Leaf size={32} className="text-gray-600" />
              <span className="text-gray-900">Garten</span>
            </button>
            
            <button className="border-2 border-gray-400 bg-white p-6 min-h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50">
              <ShoppingCart size={32} className="text-gray-600" />
              <span className="text-gray-900">Einkauf</span>
            </button>
            
            <button className="border-2 border-gray-400 bg-white p-6 min-h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50">
              <Truck size={32} className="text-gray-600" />
              <span className="text-gray-900">Transport</span>
            </button>
            
            <button className="border-2 border-gray-400 bg-white p-6 min-h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50">
              <MoreHorizontal size={32} className="text-gray-600" />
              <span className="text-gray-900">Sonstiges</span>
            </button>
          </div>
        </div>

        {/* Voice Message Option */}
        <div>
          <div className="mb-3">
            <div className="h-4 bg-gray-700 w-48"></div>
          </div>
          
          <WireframeButton variant="primary">
            <div className="flex items-center justify-center gap-3">
              <Mic size={24} />
              <span>Sprachnachricht aufnehmen</span>
            </div>
          </WireframeButton>
        </div>

        {/* Text Input */}
        <div>
          <div className="mb-3">
            <div className="h-4 bg-gray-700 w-40"></div>
          </div>
          
          <div className="border-2 border-gray-400 bg-white p-4 min-h-32">
            <div className="h-3 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 w-1/2"></div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="border-2 border-gray-400 p-4 bg-gray-100">
          <div className="h-3 bg-gray-400 w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-300 w-full mb-2"></div>
          <div className="h-3 bg-gray-300 w-4/5"></div>
        </div>

        {/* Submit Button */}
        <WireframeButton variant="large">
          Anfrage veröffentlichen
        </WireframeButton>
      </div>
    </WireframeScreen>
  );
}
