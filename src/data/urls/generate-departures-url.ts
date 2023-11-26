export function generateDeparturesUrl(
  stopId: string,
  destinationId: string | null,
  duration: number
) {
  return `https://v6.vbb.transport.rest/stops/${stopId}/departures?duration=${duration}&remarks=false&${
    destinationId !== null ? `direction=${destinationId}` : ""
  }`;
}
