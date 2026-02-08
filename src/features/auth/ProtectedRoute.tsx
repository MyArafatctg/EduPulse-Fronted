import { useContext, type JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import cookie from "js-cookie";
import { useLocation } from "react-router-dom";
import menuModel from "../../assets/menuModel.json";
import { extractPermittedPaths, type AppMenuItem } from "../../routes/menu";
import UnauthorizedPage from "../../pages/UnauthorizedPage";
import { Sidebar } from "lucide-react";

const ProtectedRoute = () => {
  const { token, authLoading } = useContext(AppContext);
  const storedToken = "as"; //localStorage.getItem("token");
  const location = useLocation();

  // const permittedMenuString = localStorage.getItem("menuDetails");

  const permittedMenu: AppMenuItem[] = menuModel
    ? JSON.parse(menuModel as unknown as string)
    : [];

  const basePath = location.pathname.split("/")[1] || "";
  const permittedPaths = extractPermittedPaths(menuModel);

  if (authLoading) return <div>Loading...</div>;

  // const permittedPaths = extractPermittedPaths(permittedMenu);

  if (!permittedPaths.includes(basePath)) {
    return <UnauthorizedPage />;
  }

  if (!storedToken) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default ProtectedRoute;
