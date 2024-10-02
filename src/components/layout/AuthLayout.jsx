import { Outlet } from "react-router-dom";
import TopBar from "./Topbar";

function AuthLayout() {
    return (
        <div>
            <TopBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;