import { stationsConfig } from "@/config/stations";
import { fetchDepartures } from "@/data/fetch/fetch-departures";
import React from "react";
import { DepartureCard } from "./departure-card";

export async function DepartureList() {
  let departureSets = [];
  for (const station of stationsConfig) {
    for (const train of station.trains) {
      let departures = [];
      if (train.identifier === "destination") {
        departures = await fetchDepartures(
          station.id,
          null,
          train.destinationId
        );
      } else {
        departures = await fetchDepartures(station.id, train.lineId, null);
      }
      departureSets.push(departures);
    }
  }

  return (
    <div className="w-full flex flex-col gap-8">
      {departureSets.map((departureSet) => (
        <DepartureCard
          key={departureSet.at(0)?.stationName}
          departures={departureSet}
        />
      ))}
    </div>
  );
}
