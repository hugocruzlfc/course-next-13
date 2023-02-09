import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("Content-Type", "application/json");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (req.nextUrl.pathname.endsWith("/information")) {
    return NextResponse.redirect(new URL("/information/characters", req.url));
    //return NextResponse.rewrite(new URL("/information/characters", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/information")) {
    const user = {
      name: "Jhon Doe",
      authenticated: process.env.NEXT_PUBLIC_AUTHENTICATED,
    };
    if (user.authenticated !== "true") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/information/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).)*",
  ],
};

// "100 10 1".match(/\d0*/g)  100, 10 , 1
// "100 10 1".match(/\d0+/g)  100, 10
