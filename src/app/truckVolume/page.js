'use client';

import {useFormik} from 'formik';
import React, {useState} from 'react';

const Page = () => {
    const [truckDetails, setTruckDetails] = useState("");

    const formik = useFormik({
        initialValues: {
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
            const {driverName, mobileNo, truckNo, lengthFeet, lengthInch, widthFeet, widthInch, heightFeet, heightInch} = values;
            const truckVolumeCft = ((lengthFeet + lengthInch / 12) * (widthFeet + widthInch / 12) * (heightFeet + heightInch / 12)).toFixed(2);
            const truckVolumeRounded = ((lengthFeet + lengthInch / 12) * (widthFeet + widthInch / 12) * (heightFeet + heightInch / 12)).toFixed(0);
            const truckInfo = {driverName, mobileNo, truckNo, truckVolumeCft, truckVolumeRounded};
            setTruckDetails(truckInfo);
        },
    });

    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
                className='grid grid-cols-2 gap-3'
            >
                <input
                    name="driverName"
                    type="text"
                    placeholder="Driver Name"
                    onChange={formik.handleChange}
                    value={formik.values.driverName}
                    className="input input-bordered w-full col-span-2"
                />
                <input
                    name="mobileNo"
                    type="text"
                    placeholder="Mobile No."
                    onChange={formik.handleChange}
                    value={formik.values.mobileNo}
                    className="input input-bordered w-full"
                />
                <input
                    name="truckNo"
                    type="text"
                    placeholder="Truck No."
                    onChange={formik.handleChange}
                    value={formik.values.truckNo}
                    className="input input-bordered w-full"
                />
                <input
                    name="lengthFeet"
                    type="number"
                    placeholder="Length (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.lengthFeet}
                    className="input input-bordered w-full"
                />
                <input
                    name="lengthInch"
                    type="number"
                    placeholder="Length (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.lengthInch}
                    className="input input-bordered w-full"
                />
                <input
                    name="widthFeet"
                    type="number"
                    placeholder="Width (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.widthFeet}
                    className="input input-bordered w-full"
                />
                <input
                    name="widthInch"
                    type="number"
                    placeholder="Width (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.widthInch}
                    className="input input-bordered w-full"
                />
                <input
                    name="heightFeet"
                    type="number"
                    placeholder="Height (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.heightFeet}
                    className="input input-bordered w-full"
                />
                <input
                    name="heightInch"
                    type="number"
                    placeholder="Height (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.heightInch}
                    className="input input-bordered w-full"
                />

                <button type='submit' className="btn btn-primary">Submit</button>
                <button type='reset' onClick={() => {
                    formik.resetForm();
                    setTruckDetails("");
                }} className="btn btn-primary">Reset</button>
            </form>
            {
                truckDetails &&
                < div className='text-center'>
                    <h2 className='my-3 font-bold text-2xl'>Truck Information</h2>
                    <table className='w-full md:w-1/2 mx-auto table table-sm border'>
                        <tbody>
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