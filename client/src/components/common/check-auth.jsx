import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("/login");
  const isRegisterPage = location.pathname.includes("/register");
  const isAdminRoute = location.pathname.includes("/admin");
  const isShopRoute = location.pathname.includes("/shop");

  // Redirect unauthenticated users to login page
  if (!isAuthenticated && !isLoginPage && !isRegisterPage) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users away from login/register pages
  if (isAuthenticated && (isLoginPage || isRegisterPage)) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    }
    return <Navigate to="/shop/home" />;
  }

  // Non-admin users trying to access admin routes
  if (isAuthenticated && user?.role !== "admin" && isAdminRoute) {
    return <Navigate to="/unauth-page" />;
  }

  // Admin users trying to access shop routes
  if (isAuthenticated && user?.role === "admin" && isShopRoute) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Render the children if no redirect conditions are met
  return <>{children}</>;
};

export default CheckAuth;
