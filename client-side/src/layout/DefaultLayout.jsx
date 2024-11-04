import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="flex flex-col p-5 gap-5 text-lg bg-gray-900 w-[240px] text-white sticky top-0 h-full">
        <Link className="hover:bg-gray-800 p-3 rounded-lg" to="/dashboard">
          Dashboard
        </Link>
        <Link className="hover:bg-gray-800 p-3 rounded-lg" to="/management">
          Management
        </Link>
      </aside>
      <div className="flex-grow overflow-y-auto">
        <header className="flex h-[80px] p-7 bg-white shadow-md items-center justify-between">
          <h2 className="text-2xl font-bold">Applicant Management</h2>
          <div className="flex flex-row items-center text-[16px]">
            {user.email} &nbsp; &nbsp;
            <a
              onClick={onLogout}
              className="flex flex-row gap-2 font-semibold btn-logout"
              href="#"
            >
              <FaArrowRightFromBracket size={24} /> Logout
            </a>
          </div>
        </header>
        <main className="p-2">
          <Outlet />
        </main>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  );
}
