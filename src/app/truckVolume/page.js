'use client';

import {useFormik} from 'formik';
import React, {useState} from 'react';
import dateFormat from 'dateformat';
import Result from './result';

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
            heightInch: '',
            perpendicularFeet: '',
            perpendicularInch: '',
            baseFeet: '',
            baseInch: ''
        },
        onSubmit: values => {
            const {date, driverName, mobileNo, truckNo, lengthFeet, lengthInch, widthFeet, widthInch, heightFeet, heightInch, perpendicularFeet, perpendicularInch, baseFeet, baseInch} = values;

            const truckLength = (Number(lengthFeet) + Number(lengthInch) / 12).toFixed(2);
            const truckWidth = (Number(widthFeet) + Number(widthInch) / 12).toFixed(2);
            const truckHeight = (Number(heightFeet) + Number(heightInch) / 12).toFixed(2);
            const truckPerpendicular = (Number(perpendicularFeet) + Number(perpendicularInch) / 12).toFixed(2);
            const truckBase = (Number(baseFeet) + Number(baseInch) / 12).toFixed(2);

            const truckVolumeCft = ((lengthFeet + lengthInch / 12) * (widthFeet + widthInch / 12) * (heightFeet + heightInch / 12)).toFixed(2);
            const truckVolumeRounded = ((lengthFeet + lengthInch / 12) * (widthFeet + widthInch / 12) * (heightFeet + heightInch / 12)).toFixed(0);
            const slopeVolumeCft = (0.5 * truckBase * truckPerpendicular * truckWidth).toFixed(2);
            const slopeVolumeRounded = (0.5 * truckBase * truckPerpendicular * truckWidth).toFixed(0);

            const truckInfo = {date, driverName, mobileNo, truckNo, truckLength, truckWidth, truckHeight, truckPerpendicular, truckBase, truckVolumeCft, truckVolumeRounded, slopeVolumeCft, slopeVolumeRounded};

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
                    className="w-full input input-sm input-bordered"
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
                <input
                    name="perpendicularFeet"
                    type="number"
                    placeholder="Perpendicular (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.perpendicularFeet}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="perpendicularInch"
                    type="number"
                    placeholder="Perpendicular (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.perpendicularInch}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="baseFeet"
                    type="number"
                    placeholder="Base (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.baseFeet}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="baseInch"
                    type="number"
                    placeholder="Base (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.baseInch}
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
                <Result data={truckDetails} />
            }
        </div>
    );
};

export default Page;