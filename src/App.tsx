import ButtonExample from "./components/Button";
import LinkExample from "./components/Link";
import { vstack } from "../styled-system/patterns";

function App() {
  return (
    <main className={vstack()}>
        <ButtonExample />
        <LinkExample />
    </main>
  );
}

export default App;
