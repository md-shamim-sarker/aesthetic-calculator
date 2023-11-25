import React from 'react';

const Result = ({data}) => {
    console.log(data);
    return (
        < div className='text-center'>
            <h2 className='my-3 font-bold text-2xl'>Result</h2>
            <table className='w-full md:w-1/2 mx-auto table table-sm border'>
                <tbody>
                    {/* <tr>
                        <th>Driver Name</th>
                        <td>{truckDetails.driverName}</td>
                    </tr>
                    <tr>
                        <th>Mobile No.</th>
                        <td>{truckDetails.mobileNo}</td>
                    </tr>
                    <tr>
                        <th>Truck No.</th>
                        <td>{truckDetails.truckNo}</td>
                    </tr>
                    <tr>
                        <th>Truck Length</th>
                        <td>{truckDetails.truckLength}</td>
                    </tr>
                    <tr>
                        <th>Truck Width</th>
                        <td>{truckDetails.truckWidth}</td>
                    </tr>
                    <tr>
                        <th>Truck Height</th>
                        <td>{truckDetails.truckHeight}</td>
                    </tr>
                    <tr>
                        <th>Truck Volume</th>
                        <td>{truckDetails.truckVolumeCft} Cft ~ {truckDetails.truckVolumeRounded} Cft</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default Result;