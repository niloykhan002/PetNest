import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h2>Hello World</h2>
      <Outlet />
    </div>
  );
};

export default Root;
