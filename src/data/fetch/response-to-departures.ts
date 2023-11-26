import { DepartureResponse } from "../types/departure-response";

export function responseToDepartures(response: DepartureResponse): Departure[] {
  const departures = response.departures.map((departure) => ({
    trainName: departure.line.name,
    trainId: departure.line.id,
    trainDestination: departure.destination.name,
    stationName: departure.stop.name,
    departureTime: new Date(departure.when),
    delay: departure.delay,
  }));

  return departures;
}
