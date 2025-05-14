import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(true);
          }}
        />
      )}
    </>
  );
}

export default App;
