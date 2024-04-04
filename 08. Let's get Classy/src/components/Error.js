import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error Page: {err.status}</h1>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
