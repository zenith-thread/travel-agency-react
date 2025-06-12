import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  route("sign-in", "routes/root/SignIn.tsx"),
  layout("routes/admin/AdminLayout.tsx", [
    route("dashboard", "routes/admin/Dashboard.tsx"),
    route("all-users", "routes/admin/AllUsers.tsx"),
  ]),
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
