import React from "react";

interface Props {
  departures: Departure[];
}

export function DepartureCard(props: Props): React.ReactElement {
  const { departures } = props;

  const formatter = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  });

  return (
    <div className="w-full p-4 rounded-xl flex flex-col bg-white border-1 border-[#e0e0e0]">
      <p className="text-2xl font-semibold pb-4 line-clamp-1">
        {departures.at(0)?.stationName.replace("(Berlin)", "")}
      </p>
      {departures.slice(0, 4).map((departure) => (
        <div
          key={departure.departureTime.getTime()}
          className="flex flex-col mb-1 w-full"
        >
          <div className="flex flex-row text-2xl gap-4">
            <p className="font-semibold">{departure.trainName}</p>
            <p className="font-bold">
              {formatter.format(departure.departureTime)}
            </p>
            <p
              className={`font-bold ${
                (departure.delay ?? 0) > 0
                  ? "text-red-800"
                  : departure.delay ?? 0
                  ? "text-green-800"
                  : ""
              }`}
            >
              {departure.delay
                ? `${departure.delay > 0 ?? "+"}${departure.delay / 60}min`
                : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
