import { Home, Search, Calendar, MessageSquare, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Suche", path: "/ausleihen" },
    { icon: Calendar, label: "Kalender", path: "/anlaesse" },
    { icon: MessageSquare, label: "Nachricht", path: "/" },
    { icon: User, label: "Profil", path: "/profil" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300">
      <div className="flex justify-around items-center px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-16 py-2"
            >
              <Icon
                size={24}
                className={isActive ? "text-gray-900" : "text-gray-400"}
                strokeWidth={2}
              />
              <span className={`text-xs ${isActive ? "text-gray-900" : "text-gray-400"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
