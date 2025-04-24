
import { FirstProvider } from "./contexts/first";
import { SecondProvider } from "./contexts/second";
import ChildComponent from "./components/childcomponent";

const App = () => {
  return (
    <FirstProvider>
      <SecondProvider>
        <ChildComponent />
      </SecondProvider>
    </FirstProvider>
  );
};

export default App;