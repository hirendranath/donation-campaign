import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
           <div className="flex justify-between items-center my-5 px-20">
                <div>
                    <img src="./Logo.png" alt="" />
                </div>
                <ul className="flex gap-4 font-bold">
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-red-600 underline" : ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-red-600 underline" : ""} to='/donation'>Donation</NavLink></li>
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-red-600 underline" : ""} to='/statistics'>Statistics</NavLink></li>
                </ul>
          </div>
        </div>
    );
};

export default Header;