import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Tax } from "./pages/Tax";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route index element={<Main />} />
        <Route path="/taxes" element={<Tax />} />
      </Route>
    </Routes>
  )
}