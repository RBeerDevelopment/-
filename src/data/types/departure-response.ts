import { z } from "zod";

export const departureSchema = z.object({
  departures: z.array(
    z.object({
      tripId: z.string(),
      stop: z.object({
        type: z.string(),
        name: z.string(),
        stationDHID: z.string(),
      }),
      when: z.string(),
      plannedWhen: z.string(),
      delay: z.number(),
      platform: z.string().nullable(),
      plannedPlatform: z.string().nullable(),
      direction: z.string(),
      line: z.object({
        type: z.string(),
        id: z.string(),
        fahrtNr: z.string(),
        name: z.string(),
        color: z.object({ fg: z.string(), bg: z.string() }),
      }),
      destination: z.object({
        type: z.string(),
        id: z.string(),
        name: z.string(),
        stationDHID: z.string(),
      }),
    })
  ),
  realtimeDataUpdatedAt: z.number().nullable(),
});

export type DepartureResponse = z.infer<typeof departureSchema>;
