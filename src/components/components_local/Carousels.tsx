import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Carousels() {
  return (
    <main className="w-[50%] m-auto flex justify-center flex-col items-center h-screen">
      Woooah !
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-10/12 flex justify-center items-center font-bold text-yellow-600 border-slate-300 h-10  w-10 border">
            One
          </CarouselItem>
          <CarouselItem className="basis-10/12 flex justify-center items-center font-bold text-yellow-600 border-slate-300 h-10  w-10 border">
            Two
          </CarouselItem>
          <CarouselItem className="basis-10/12 flex justify-center items-center font-bold text-yellow-600 border-slate-300 h-10  w-10 border">
            Three
          </CarouselItem>
        </CarouselContent>
        <div className="div bg-pink-800">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </main>
  );
}
