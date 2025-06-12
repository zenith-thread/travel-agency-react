import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/admin/AdminLayout.tsx", [
    route("dashboard", "routes/admin/Dashboard.tsx"),
    route("all-users", "routes/admin/AllUsers.tsx"),
  ]),
] satisfies RouteConfig;
