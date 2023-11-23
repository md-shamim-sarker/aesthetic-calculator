import TableComponent from "./table";

async function getData() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbzT-Z-dIdiBV0XRALgK3nCr8h-BZ4Ru3qc3hmj6F4pWGWPVwhg6RKxKZmge8NbuzC_FJQ/exec');
    return res.json();
}

const Page = async () => {
    const data = await getData();

    return (
        <div className="text-center">
            <h2 className='my-3 font-bold text-2xl'>Truck Information</h2>
            <TableComponent data={data.data} />
        </div>
    );
};

export default Page;