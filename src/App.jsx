import Sidebar from "./components/Sidebar";
import Play from "./components/Play";
import Display from "./components/Display";
import Footer from "./components/Footer";
import { useContext } from "react";
import { PlayContext } from "./context/PlayContext";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, loginWithRedirect, isLoading } = useAuth0();
  const { audioRef, track } = useContext(PlayContext);
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  // Show loading state while Auth0 initializes
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-white bg-black">
        Loading Auth...
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Login Button */}
      {!user && (
    <div className="fixed top-4 right-4 z-50">
      <button
        className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 transition"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  )}

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-60 h-screen z-40 bg-[#121212] overflow-y-auto border-r border-gray-800">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="ml-60 flex flex-col h-full overflow-hidden pb-24">
        <div className="flex-grow overflow-y-auto">
          <Display />
          {isHomePage && <Footer />}
        </div>
      </main>

      {/* Bottom Player */}
      <div className="fixed bottom-0 left-0 w-full bg-black z-50">
        <Play />
        <audio ref={audioRef} src={track.file} preload="auto" />
      </div>
    </div>
  );
};

export default App;
