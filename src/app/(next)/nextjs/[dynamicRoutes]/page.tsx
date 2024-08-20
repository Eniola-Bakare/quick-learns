"use client";

import { useParams } from "next/navigation";

export default function Page({
  params,
}: {
  params: { dynamicRoutes: string };
}) {
  function arise() {
    throw new Error();
  }
  arise();
  const { dynamicRoutes } = useParams();
  console.log(params);
  return (
    <div>
      {dynamicRoutes}, {params?.dynamicRoutes || 0}{" "}
    </div>
  );
}
