import { createRoutes } from "@adebsa2401/routes-tree-builder";

const routes = createRoutes({
  index: "/",
  signin: "/signin",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
});

export default routes;
