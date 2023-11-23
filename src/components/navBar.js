import Link from "next/link";
import {FcHome} from "react-icons/fc";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className="bg-blue-700 flex justify-between items-center px-5 py-2">
            <div className="flex items-center gap-2">
                <Image src="/calculator.png" alt="logo" width={25} height={25} />
                <span className="text-blue-50 text-2xl font-bold">Aesthetic Calculator</span>
            </div>
            <Link href={"/"}><FcHome className="text-2xl" /></Link>
        </div>
    );
};

export default NavBar;