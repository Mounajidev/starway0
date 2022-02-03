import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import SwapTokens from "./views/swaptokens";
import Roadmap from "./views/roadmap";
import Ecosystem from "./views/ecosystem";
import Whitepaper from "./views/whitepaper";
import MainLayout from './layouts/main';
import PlayWebGL from "./views/playWebGL/playwebgl";


function App() {
  return (
    <MainLayout>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/swaptokens" exact element={<SwapTokens/>} />
      <Route path="/roadmap" exact element={<Roadmap/>} />
      <Route path="/ecosystem" exact element={<Ecosystem/>} />
      <Route path="/whitepaper" exact element={<Whitepaper/>} />
      <Route path="/playwebgl" exact element={<PlayWebGL/>} />
      </Routes>
    </MainLayout>
  );
}

export default App;
