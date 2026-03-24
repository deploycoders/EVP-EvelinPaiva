import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import ServerErrorPage from "@/pages/ServerError/ServerErrorPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inicio" element={<Navigate to="/" replace />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route
        path="/500"
        element={
          <ServerErrorPage
            title="Internal server error"
            description="The server returned an unexpected response. Please try again in a moment."
            showReload
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
