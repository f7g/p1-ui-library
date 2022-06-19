import ColorTheme from "./components/color-theme";
import Buttons from "./components/buttons";
import Tables from "./components/tables";

function App() {
  return (
    <div className="space-y-6 p-8">
      <ColorTheme />
      <Buttons />
      <Tables />
    </div>
  );
}

export default App;
