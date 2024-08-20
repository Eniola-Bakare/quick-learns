export default function page({ params }: { params: { slug: string[] } }) {
  return (
    <>
      {params?.slug ? (
        <div>
          learning nextjs - enroute {params?.slug[0]}, and {params?.slug[1]}
        </div>
      ) : (
        <>Sighhhhhhhhhhhhhhhhhhhhhhh mmmmmmmmmmmmm</>
      )}
    </>
  );
}
