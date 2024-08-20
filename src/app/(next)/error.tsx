"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <div>Display Errrr {error.message}</div>;
}
