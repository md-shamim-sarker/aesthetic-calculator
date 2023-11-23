'use client';
import React, {useState} from 'react';
import dateFormat from 'dateformat';
import {FaSearch} from "react-icons/fa";
import {useFormik} from 'formik';

const TableComponent = ({data}) => {
    const [truckData, setTruckData] = useState(data);

    const formik = useFormik({
        initialValues: {
            truckNo: ''
        },
        onSubmit: values => {
            const {truckNo} = values;
            const truckData = data.filter(d => d.truckNo === truckNo.toString());
            if(truckData.length > 0) {
                setTruckData(truckData);
            } else {
                setTruckData(data);
            }
        },
    });

    return (
        <div className='w-full md:w-1/2 mx-auto'>
            <div >
                <form onSubmit={formik.handleSubmit} className='flex gap-3 py-3'>
                    <input
                        type="number"
                        name='truckNo'
                        placeholder="Truck No."
                        className="input input-sm input-bordered w-full"
                        onChange={formik.handleChange}
                        value={formik.values.truckNo}
                    />
                    <button type='submit' className="btn btn-sm btn-primary">
                        <FaSearch className='text-xl' />
                        Search
                    </button>
                </form>
            </div>
            <div className='overflow-x-auto border rounded-xl'>
                <table className='table table-sm text-center'>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Truck</th>
                            <th>Volume</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Copy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            truckData.map((d, i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td className='whitespace-nowrap'>{dateFormat(d.date, 'dd-mm-yy')}</td>
                                <td className='whitespace-nowrap'>{d.truckNo}</td>
                                <td className='whitespace-nowrap'>{d.volume} Cft</td>
                                <td className='whitespace-nowrap'>{d.driverName}</td>
                                <td className='whitespace-nowrap'>{d.mobileNo}</td>
                                <td>
                                    <button
                                        className='btn btn-sm btn-primary'
                                        onClick={() => navigator.clipboard.writeText(d.mobileNo)}
                                    >Copy</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableComponent;