import "./App.css";
import Homepage from "./components/HomePage";
import RouteDetails from "./components/RouteDetails";
import RouteDirection from "./components/RouteDirection";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />}>
          <Route path=":routeId" element={<RouteDirection />}>
            <Route path=":directionId" element={<RouteDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
