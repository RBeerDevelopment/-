import React from "react";

interface Props {
  departures: Departure[];
}

export function DepartureCard(props: Props): React.ReactElement {
  const { departures } = props;

  return (
    <div className="w-full p-4 rounded-xl shadow-md flex flex-col">
      <p className="text-xl font-semibold">{departures.at(0)?.stationName}</p>
      {departures.map((departure) => (
        <div className="flex" key={departure.stationName}>
          <div className="flex flex-col">
            <div className="font-bold text-xl">{departure.trainName}</div>
            <div className="text-gray-500">{departure.trainDestination}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-xl">{departure.delay}</div>
            <div className="text-gray-500">{departure.stationName}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
