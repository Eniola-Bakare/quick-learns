import Calendar from "@/components/components_local/Calendar";
// import Carousels from "@/components/components_local/carousels";
import InputOTP from "@/components/components_local/InputOTP";
import { notFound } from "next/navigation";

export default function Home() {
  // notFound();
  return (
    <main className="w-[100%] m-auto flex h-screen  items-center">
      {/* <button onClick={() => notFound()}>Click me !</button> */}
      <div className="flex w-full flex-col h-[50%]">
        {/* <Carousels /> */}
        <hr />
        <Calendar />
        <hr />
        <InputOTP />
      </div>
    </main>
  );
}
