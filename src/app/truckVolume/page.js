'use client';

import {useFormik} from 'formik';
import React, {useState} from 'react';
import dateFormat from 'dateformat';

const Page = () => {
    const [truckDetails, setTruckDetails] = useState("");

    const formik = useFormik({
        initialValues: {
            date: dateFormat(new Date(), "yyyy-mm-dd"),
            driverName: '',
            mobileNo: '',
            truckNo: '',
            lengthFeet: '',
            lengthInch: '',
            widthFeet: '',
            widthInch: '',
            heightFeet: '',
            heightInch: ''
        },
        onSubmit: values => {
            const {date, driverName, mobileNo, truckNo, lengthFeet, lengthInch, widthFeet, widthInch, heightFeet, heightInch} = values;

            const truckLength = (Number(lengthFeet) + Number(lengthInch) / 12).toFixed(2);
            const truckWidth = (Number(widthFeet) + Number(widthInch) / 12).toFixed(2);
            const truckHeight = (Number(heightFeet) + Number(widthInch) / 12).toFixed(2);

            const truckVolumeCft = ((lengthFeet + lengthInch / 12) * (widthFeet + widthInch / 12) * (heightFeet + heightInch / 12)).toFixed(2);
            const truckVolumeRounded = ((lengthFeet + lengthInch / 12) * (widthFeet + widthInch / 12) * (heightFeet + heightInch / 12)).toFixed(0);

            const truckInfo = {date, driverName, mobileNo, truckNo, truckLength, truckWidth, truckHeight, truckVolumeCft, truckVolumeRounded};

            setTruckDetails(truckInfo);
        },
    });

    return (
        <div className='text-center'>
            <h2 className='my-2 font-bold text-2xl'>Volume Calculation</h2>
            <form
                onSubmit={formik.handleSubmit}
                className='w-full md:w-1/2 mx-auto grid grid-cols-2 gap-3'
            >
                <input
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="driverName"
                    type="text"
                    placeholder="Driver Name"
                    onChange={formik.handleChange}
                    value={formik.values.driverName}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="mobileNo"
                    type="text"
                    placeholder="Mobile No."
                    onChange={formik.handleChange}
                    value={formik.values.mobileNo}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="truckNo"
                    type="text"
                    placeholder="Truck No."
                    onChange={formik.handleChange}
                    value={formik.values.truckNo}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="lengthFeet"
                    type="number"
                    placeholder="Length (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.lengthFeet}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="lengthInch"
                    type="number"
                    placeholder="Length (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.lengthInch}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="widthFeet"
                    type="number"
                    placeholder="Width (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.widthFeet}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="widthInch"
                    type="number"
                    placeholder="Width (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.widthInch}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="heightFeet"
                    type="number"
                    placeholder="Height (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.heightFeet}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="heightInch"
                    type="number"
                    placeholder="Height (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.heightInch}
                    className="input input-bordered w-full input-sm"
                />

                <button type='submit' className="btn btn-primary btn-sm">Submit</button>
                <button type='reset' onClick={() => {
                    formik.resetForm();
                    setTruckDetails("");
                }} className="btn btn-primary btn-sm">Reset</button>
            </form>
            {
                truckDetails &&
                < div className='text-center'>
                    <h2 className='my-3 font-bold text-2xl'>Truck Information</h2>
                    <table className='w-full md:w-1/2 mx-auto table table-sm border'>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <td>{dateFormat(truckDetails.date, "dd-mm-yyyy")}</td>
                            </tr>
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Page;