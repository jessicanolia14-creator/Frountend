import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyActivity from "./pages/KegiatanSaya";
import FilterResult from "./pages/FilterResult";
import DetailRekomendasiKegiatan from "./pages/DetailRekomendasiKegiatan";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* REGISTER */}
        <Route
          path="/"
          element={<Register />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* MY ACTIVITY */}
        <Route
          path="/myactivity"
          element={<MyActivity />}
        />

        {/* FILTER RESULT */}
        <Route
          path="/filterresult"
          element={<FilterResult />}
        />

        {/* DETAIL */}
        <Route
          path="/detailrekomendasikegiatan"
          element={<DetailRekomendasiKegiatan />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;