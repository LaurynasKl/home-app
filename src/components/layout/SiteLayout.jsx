import { Outlet } from "react-router-dom";
import TopBar from "./Topbar";

export function SiteLayout() {
    return (
        <div>
            <TopBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};