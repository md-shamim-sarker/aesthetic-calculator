import Link from "next/link";
import {GiCrystalBars} from "react-icons/gi";
import {MdOutlineFireTruck} from "react-icons/md";

const Home = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div className="border rounded-md p-2 text-center shadow-md hover:bg-slate-900 hover:text-white transition-all">
        <Link href="/rebarWeight" className="flex flex-col item-center justify-center">
          <div className="flex justify-center"><GiCrystalBars className="text-3xl" /></div>
          <p>Rebar Weight</p>
        </Link>
      </div>

      <div className="border rounded-md p-2 text-center shadow-md hover:bg-slate-900 hover:text-white transition-all">
        <Link href="/truckVolume" className="flex flex-col item-center justify-center">
          <div className="flex justify-center"><MdOutlineFireTruck className="text-3xl" /></div>
          <p>Truck Volume</p>
        </Link>
      </div>

      <div className="border rounded-md p-2 text-center shadow-md hover:bg-slate-900 hover:text-white transition-all">
        <Link href={"#"} className="flex flex-col item-center justify-center">
          <div className="flex justify-center"><GiCrystalBars className="text-3xl" /></div>
          <p>Rebar Weight</p>
        </Link>
      </div>

      <div className="border rounded-md p-2 text-center shadow-md hover:bg-slate-900 hover:text-white transition-all">
        <Link href={"#"} className="flex flex-col item-center justify-center">
          <div className="flex justify-center"><GiCrystalBars className="text-3xl" /></div>
          <p>Rebar Weight</p>
        </Link>
      </div>

      <div className="border rounded-md p-2 text-center shadow-md hover:bg-slate-900 hover:text-white transition-all">
        <Link href={"#"} className="flex flex-col item-center justify-center">
          <div className="flex justify-center"><GiCrystalBars className="text-3xl" /></div>
          <p>Rebar Weight</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;