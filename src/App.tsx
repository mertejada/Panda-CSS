import ButtonExample from "./components/Button";
import LinkExample from "./components/Link";
import { vstack } from "../styled-system/patterns";
import IconExample from "./components/Icon";

function App() {
  return (
    <main className={vstack()}>
        <ButtonExample />
        <LinkExample />
        <IconExample />
    </main>
  );
}

export default App;
