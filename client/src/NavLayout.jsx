import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./styles.css";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      <Layout loading={state === "loading"}>
        <Outlet />
      </Layout>
    </>
  );
}

function Layout({ children, loading }) {
  return <div className={loading ? "loading-spinner" : ""}>{children}</div>;
}
