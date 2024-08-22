"use client";

export default function error({ error }: { error: Error }) {
  console.log("first error !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  console.log(error);
  return <div>error: {error.stack}</div>;
}
