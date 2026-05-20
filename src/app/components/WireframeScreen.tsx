import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "./BottomNav";

interface WireframeScreenProps {
  title: string;
  children: ReactNode;
  showBack?: boolean;
  showBottomNav?: boolean;
}

export function WireframeScreen({ 
  title, 
  children, 
  showBack = false,
  showBottomNav = true 
}: WireframeScreenProps) {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-100 border-b-2 border-gray-300 px-4 py-4 flex items-center gap-3">
        {showBack && (
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
        )}
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      </div>

      {/* Content */}
      <div className={`flex-1 overflow-y-auto ${showBottomNav ? 'pb-20' : ''}`}>
        <div className="p-5">
          {children}
        </div>
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && <BottomNav />}
    </div>
  );
}
