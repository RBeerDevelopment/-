type StationConfig = {
  id: string;
  name: string;
  trains: readonly TrainConfig[];
};

type TrainConfig = {
  name: string;
} & (
  | { identifier: "destination"; destinationId: string }
  | { identifier: "lineId"; lineId: string }
);

export const stationsConfig = [
  {
    id: "900120001",
    name: "Frankfurter Allee",
    trains: [
      {
        name: "S41",
        identifier: "lineId",
        lineId: "s41",
      },

      {
        name: "S42",
        identifier: "lineId",
        lineId: "s42",
      },
    ],
  },
  {
    id: "900120009",
    name: "Samariterstraße",
    trains: [
      {
        name: "U5 - Hauptbahnhof",
        identifier: "destination",
        destinationId: "900003201", // hauptbahnhof
      },
    ],
  },
  {
    id: "900120540",
    name: "Traveplatz",
    trains: [
      {
        name: "M13 - Warschauer Straße",
        identifier: "destination",
        destinationId: "900120011", // warschauer straße
      },
    ],
  },
] as const satisfies readonly StationConfig[];
