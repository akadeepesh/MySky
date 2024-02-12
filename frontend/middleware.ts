import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    // "/api/cards",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};