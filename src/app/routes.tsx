import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { HilfeAnfragen } from "./components/HilfeAnfragen";
import { Ausleihen } from "./components/Ausleihen";
import { Anlaesse } from "./components/Anlaesse";
import { Privatsphaere } from "./components/Privatsphaere";
import { Profil } from "./components/Profil";
import { AngebotMelden } from "./components/AngebotMelden";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/hilfe-anfragen",
    Component: HilfeAnfragen,
  },
  {
    path: "/ausleihen",
    Component: Ausleihen,
  },
  {
    path: "/anlaesse",
    Component: Anlaesse,
  },
  {
    path: "/privatsphaere",
    Component: Privatsphaere,
  },
  {
    path: "/profil",
    Component: Profil,
  },
  {
    path: "/angebot-melden",
    Component: AngebotMelden,
  },
]);
