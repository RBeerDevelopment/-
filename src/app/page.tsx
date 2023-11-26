import { DepartureList } from "@/compontents/departure-list";
import { stationsConfig } from "@/config/stations";
import { fetchDepartures } from "@/data/fetch/fetch-departures";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      <Suspense>
        <DepartureList />
      </Suspense>
    </main>
  );
}
