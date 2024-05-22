import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Tax } from "./pages/Tax";
import { Attractions } from "./pages/Attractions";
import { useScrollToTop } from "./hooks/useScrollToTop";

export function Router() {
  useScrollToTop();

  return (
    <Routes>
      <Route>
        <Route index element={<Main />} />
        <Route path="/taxes" element={<Tax />} />
        <Route path="/:attractionId" element={<Attractions />} />
      </Route>
    </Routes>
  )
}