import { useState } from "react";
import { useGetWeatherInfoQuery } from "../api/apiSlice";
import ErrorState from "./ErrorState";
import WeatherDisplay from "./WeatherDisplay";
import ShimmerUI from "./ShimmerUI";
import EmptyState from "./EmptyState";
import Switch from "./Switch";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("europe");
  const [celsiusStatus, setCelsiusStatus] = useState(true);
  const [skip, setSkip] = useState(true);

  const { data, isLoading, isSuccess, isError, error } = useGetWeatherInfoQuery(
    searchTerm,
    { skip }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkip(false);
    setSearchTerm(e.target.elements[0].value);
  };

  const searchBar = (
    <form onSubmit={handleSubmit} className="py-16 w-full">
      <input
        type="text"
        id="searchForCity"
        className="border px-4 py-2 rounded-md w-full"
        placeholder="Search for cities"
      />
    </form>
  );

  let content = <EmptyState />;
  if (isLoading) {
    content = <ShimmerUI />;
  } else if (isSuccess) {
    content = <WeatherDisplay data={data} celsiusStatus={celsiusStatus} />;
  } else if (isError) {
    content = <ErrorState error={error} />;
  }

  return (
    <main className="max-w-[65rem] m-auto">
      <div className="flex items-center gap-6 ">
        {searchBar}
        <Switch
          celsiusStatus={celsiusStatus}
          setCelsiusStatus={setCelsiusStatus}
        />
      </div>

      {content}
    </main>
  );
};

export default Dashboard;
