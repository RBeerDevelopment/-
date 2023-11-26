import { departureSchema } from "../types/departure-response";
import { generateDeparturesUrl } from "../urls/generate-departures-url";
import { responseToDepartures } from "./response-to-departures";

export async function fetchDepartures(
  stationId: string,
  lineName: string | null,
  destinationId: string | null,
  duration?: number
): Promise<Departure[]> {
  if (destinationId !== null) {
  }
  const url = generateDeparturesUrl(stationId, destinationId, duration ?? 30);

  const response = await fetch(url);
  const data = await response.json();

  const validatedResponse = departureSchema.safeParse(data);
  if (validatedResponse.success === false) {
    console.error("ERROR: ", validatedResponse.error);
    return [];
  }
  const departures = responseToDepartures(validatedResponse.data);

  if (!destinationId) {
    return departures.filter((departure) => departure.trainId === lineName);
  }

  return departures;
}
