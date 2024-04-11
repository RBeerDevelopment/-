import { DepartureList } from "@/components/departure-list";
import { RefreshHandler } from "@/components/refresh-handler";
import { Suspense } from "react";

export default async function Home() {
  const timeFormatter = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Berlin",
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen bg-neutral-50 py-4">
      <Suspense>
        <DepartureList />
      </Suspense>
      <RefreshHandler />
    </main>
  );
}
