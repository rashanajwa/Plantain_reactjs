import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";

import Navbar from "./pages/navbar";
import HomePage from "./pages/homePage";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import FooterComponent from "./pages/footer";
import CNNConceptPage from "./pages/cnn-concept-page";
import DatasetPage from "./pages/dataset-page";
import PlantainPage from "./pages/plantain-page";
import ReferencePage from "./pages/references-page";

const RouterList = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/cnn", element: <CNNConceptPage /> },
    { path: "/dataset", element: <DatasetPage /> },
    { path: "/plantain", element: <PlantainPage /> },
    { path: "/references", element: <ReferencePage /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Navbar />
      <Router>
        <RouterList />
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
