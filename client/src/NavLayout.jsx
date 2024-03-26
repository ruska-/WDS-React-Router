import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "./Navbar";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      {state === "loading" ? <h1>Loading...</h1> : <Outlet />}
    </>
  );
}
