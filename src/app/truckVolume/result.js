import React from 'react';
import dateFormat from 'dateformat';

const Result = ({data}) => {
    return (
        < div className='text-center'>
            <h2 className='my-3 font-bold text-2xl'>Truck Information</h2>
            <table className='w-full md:w-1/2 mx-auto table table-sm border'>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <td>{dateFormat(data.date, "dd-mm-yyyy")}</td>
                    </tr>
                    <tr>
                        <th>Driver Name</th>
                        <td>{data.driverName}</td>
                    </tr>
                    <tr>
                        <th>Mobile No.</th>
                        <td>{data.mobileNo}</td>
                    </tr>
                    <tr>
                        <th>Truck No.</th>
                        <td>{data.truckNo}</td>
                    </tr>
                    <tr>
                        <th>Truck Length</th>
                        <td>{data.truckLength}</td>
                    </tr>
                    <tr>
                        <th>Truck Width</th>
                        <td>{data.truckWidth}</td>
                    </tr>
                    <tr>
                        <th>Truck Height</th>
                        <td>{data.truckHeight}</td>
                    </tr>
                    <tr>
                        <th>Truck Volume</th>
                        <td>{data.truckVolumeCft} Cft ~ {data.truckVolumeRounded} Cft</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Result;