import Link from "next/link";
import {FcHome} from "react-icons/fc";

const NavBar = () => {
    return (
        <div className="bg-blue-700 flex justify-between items-center px-5 py-2">
            <div className="text-red-100 text-2xl font-bold">Aesthetic Calculator</div>
            <Link href={"/"}><FcHome className="text-2xl" /></Link>
        </div>
    );
};

export default NavBar;