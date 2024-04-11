import { stationsConfig } from "@/config/stations";
import { fetchDepartures } from "@/data/fetch/fetch-departures";
import React from "react";
import { DepartureCard } from "./departure-card";

export async function DepartureList() {
  let departureSets = [];
  for (const station of stationsConfig) {
    let departures: Departure[][] = [];
    for (const train of station.trains) {
      if (train.identifier === "destination") {
        departures.push(
          await fetchDepartures(station.id, null, train.destinationId)
        );
      } else {
        departures.push(await fetchDepartures(station.id, train.lineId, null));
      }
    }

    departureSets.push(
      departures
        .flatMap((d) => d)
        .sort((a, b) => a.departureTime.getTime() - b.departureTime.getTime())
    );
  }

  return (
    <div className="flex flex-col gap-8 w-5/6">
      {departureSets.map((departureSet) => (
        <DepartureCard
          key={departureSet.at(0)?.stationName}
          departures={departureSet}
        />
      ))}
    </div>
  );
}
