import { headers } from "next/headers";
import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string; text: string } }
) {
  const reqObj = await request.json();
  //   const comment = comments.map((comment) =>
  //     comment.id === parseInt(params.id)
  //       ? { ...comment, text: textUpdated.text }
  //       : comment
  //   );

  //   return new Response(JSON.stringify(comment), {
  //     headers: { "Content-Type": "application/json" },
  //     status: 201,
  //     statusText: "Comment successfully updated !",
  //   });
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = reqObj.text;
  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedC = comments.splice(index, 1);
  return Response.json(deletedC);
}
