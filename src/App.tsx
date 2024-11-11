import ButtonExample from "./components/Button";
import LinkExample from "./components/Link";
import { vstack } from "../styled-system/patterns";
import IconExample from "./components/Icon";
import Badge from "./components/Badges/Badge";

function App() {
  return (
    <main className={vstack()}>
        <ButtonExample />
        <LinkExample />
        <IconExample />
        <Badge title="Pending Status" type='accepted' />
        <Badge title="Pending Status" type='refused' />
        <Badge title="Pending Status" type='pending' />
        <Badge title="Pending Status" type='neutral' />
        <Badge title="Pending Status" type='selectable' />


    </main>
  );
}

export default App;
