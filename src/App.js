import { useState } from "react";

import AppRoutes from "./routes/routes";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <main>
      <AppRoutes />
    </main>
  );
};

export default App;
