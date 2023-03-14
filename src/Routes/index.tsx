import { Route, Routes as Rotas } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export const Routes = () => {
  return (
    <>
      <Rotas>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Profile />} />
      </Rotas>
    </>
  );
};
