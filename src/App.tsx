import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bag from "./pages/Bag";
import Home from "./pages/Home";
import ItemView from "./pages/ItemView";
import globalStyles from "./styles/globalStyle";
import { Container, ContainerRoutes, NavbarContainer } from "./styles/styles";


const App = () => {
  globalStyles();
  return (
    <Container>
      <BrowserRouter>
        <div className={NavbarContainer()}>
          <Navbar />
        </div>
        <ContainerRoutes>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/item-view/:id" element={<ItemView />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
        </ContainerRoutes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
