import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isShowing, setIsShowing] = useState(false);

  function pressed() {
    setIsShowing(!isShowing)
  }

  return (
    <div>
      {isShowing && <Alert onClose={pressed}>Hello</Alert>}
      <Button onClick={pressed} color="primary">
        Button
      </Button>
    </div>
  );
}

export default App;
