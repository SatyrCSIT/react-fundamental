import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Layout() {
    return (
        <>
            <Navbar />

            <div className="p-4 flex h-full">
                <Sidebar />
                <div className="ps-3">
                    <Outlet />
                </div>
            </div>
        </>
    )
}