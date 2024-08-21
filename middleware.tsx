import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // console.log("middle ware is working,", request.url);

  if (request.nextUrl.pathname === "/routeHandlers/time") {
    return NextResponse.redirect(new URL("/reactquery", request.url));
  }
}

// export const config = {
//   matcher: "/routeHandlers/:path*",
// };
 