import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/es";

    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/"],
};
