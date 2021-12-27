import "./App.css";
import Homepage from "./components/HomePage";
import RouteDetails from "./components/RouteDetails";
import RouteDirection from "./components/RouteDirection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />}>
          <Route exact path=":routeId" element={<RouteDirection />}>
            <Route path=":directionId" element={<RouteDetails />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Wrong Path</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
