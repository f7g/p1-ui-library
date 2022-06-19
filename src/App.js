import ColorTheme from "./components/color-theme";
import Buttons from "./components/buttons";
import Tables from "./components/tables";
import InputGroups from "./components/input-groups";
import Panels from "./components/panels";
import DefaultLayout from "./layout/default-layout";
import Tabs from "./components/tabs";

function App() {
  return (
    <DefaultLayout tabs={<Tabs />}>
      <div className="px-4 py-6 space-y-6 sm:px-8">
        <ColorTheme />
        <Buttons />
        <Tables />
        <InputGroups />
        <Panels />
      </div>
    </DefaultLayout>
  );
}

export default App;
