import ColorTheme from "./components/color-theme";
import Buttons from "./components/buttons";
import Tables from "./components/tables";
import InputGroups from "./components/input-groups";

function App() {
  return (
    <div className="space-y-6 p-8 mb-24">
      <ColorTheme />
      <Buttons />
      <Tables />
      <InputGroups />
    </div>
  );
}

export default App;
