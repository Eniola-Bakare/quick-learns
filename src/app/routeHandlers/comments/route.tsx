import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = { id: comments.length + 1, text: comment.text };
  comments.push(newComment);
  //   console.log(Request, request);

  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 404,
    statusText: "Successfully created",
  });
}
