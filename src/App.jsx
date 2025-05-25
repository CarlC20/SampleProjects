import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(true);
          }}
        />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opcaity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
}

export default App;
