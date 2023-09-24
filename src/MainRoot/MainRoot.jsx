import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const MainRoot = () => {
    return (
        <div className="max-w-[1800px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;