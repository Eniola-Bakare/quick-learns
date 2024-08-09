"use client";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import React from "react";

export default function Calendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  function handleDateChange(e: any) {
    console.log(e);
    setDate(e);
  }
  console.log(date);
  return (
    <CalendarUI
      mode="single"
      selected={date}
      onSelect={handleDateChange}
      className="rounded-md border"
    />
  );
}
