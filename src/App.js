import { BrowserRouter } from "react-router-dom";
import { MainComponent } from "./Components/MainComponent";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <MainComponent />
      </BrowserRouter>
    </div>
  );
}

