import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./pages/HomePage";
import { RestaurantPage } from "./pages/RestaurantPage";
import { HotelPage } from "./pages/HotelPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { EventsPage } from "./pages/EventsPage";
import { GalleryPage } from "./pages/GalleryPage";

function AppContent() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/restaurant",
      element: <RestaurantPage />,
    },
    {
      path: "/hotel",
      element: <HotelPage />,
    },
    {
      path: "/event",
      element: <EventsPage />,
    },
    {
      path: "/gallery",
      element: <GalleryPage />,
    },
    {
      path: "/about",
      element: <AboutUsPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

function App() {
  return <AppContent />;
}

export default App;
