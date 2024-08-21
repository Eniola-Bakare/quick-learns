import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  cookies().set("eniola", "noun");
  cookies().get("so");
  return Response.json("<h1>Welcome to Route Handlers</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "so=sise?",
    },
  });
}
