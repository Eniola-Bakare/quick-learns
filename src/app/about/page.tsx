import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("so");

  console.log(theme);

  return <div>Abouttt</div>;
}
