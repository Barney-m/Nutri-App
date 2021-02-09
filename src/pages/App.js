import React from "react";
import { RecoilRoot } from "recoil";
import Routes from "../configs/router.config";

const App = () => {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
};

export default App;
