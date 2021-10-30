import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes/Routes";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
