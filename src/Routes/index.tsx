import { BrowserRouter, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:name" component={About} />
    </BrowserRouter>
  );
};
