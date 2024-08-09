'use client'

import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function ReactQuery() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["superheroes"],
    queryFn: () =>
      fetch(`http://localhost:4000/superheroes`).then((res) => res.json()),
  });

  if (isLoading) return <h3 className=" italic">Loading...</h3>;
  if (isError) return <h3 className=" italic">ERROR: {error.message}</h3>;
  return (
    <>
      ReactQuery !
      <div>
        {data.map((each: any) => (
          <h2 key={each.id}>
            {each.id}: {each.name}
          </h2>
        ))}
      </div>
    </>
  );
}
