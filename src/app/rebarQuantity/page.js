'use client';

import {useFormik} from 'formik';
import React, {useState} from 'react';
import dateFormat from 'dateformat';
import Result from './result';

const Page = () => {
    const [rebarInfo, setRebarInfo] = useState("");

    const formik = useFormik({
        initialValues: {
            date: dateFormat(new Date(), "yyyy-mm-dd"),
            dealer: '',
            rate: '',
            rebar08mm: '',
            rebar10mm: '',
            rebar12mm: '',
            rebar16mm: '',
            rebar20mm: '',
            rebar25mm: ''
        },
        onSubmit: values => {
            const {date, dealer, rate, rebar08mm, rebar10mm, rebar12mm, rebar16mm, rebar20mm, rebar25mm} = values;

            const rebar08mmQnty = Math.ceil((rebar08mm * 162.2) / (8 * 8 * 12));
            const rebar10mmQnty = Math.ceil((rebar10mm * 162.2) / (10 * 10 * 12));
            const rebar12mmQnty = Math.ceil((rebar12mm * 162.2) / (12 * 12 * 12));
            const rebar16mmQnty = Math.ceil((rebar16mm * 162.2) / (16 * 16 * 12));
            const rebar20mmQnty = Math.ceil((rebar20mm * 162.2) / (20 * 20 * 12));
            const rebar25mmQnty = Math.ceil((rebar25mm * 162.2) / (25 * 25 * 12));

            const totalRebarQuantity = Number(rebar08mmQnty) + Number(rebar10mmQnty) + Number(rebar12mmQnty) + Number(rebar16mmQnty) + Number(rebar20mmQnty) + Number(rebar25mmQnty);

            const totalRebarWeight = (Number(rebar08mm) + Number(rebar10mm) + Number(rebar12mm) + Number(rebar16mm) + Number(rebar20mm) + Number(rebar25mm)).toFixed(3);

            const totalPrice = ((totalRebarWeight / 1000) * rate).toFixed(2);

            const rebarInfo = {date, dealer, rate, rebar08mmQnty, rebar10mmQnty, rebar12mmQnty, rebar16mmQnty, rebar20mmQnty, rebar25mmQnty, totalRebarQuantity, totalPrice, rebar08mm, rebar10mm, rebar12mm, rebar16mm, rebar20mm, rebar25mm, totalRebarWeight};

            setRebarInfo(rebarInfo);
        },
    });

    return (
        <div className='text-center'>
            <h2 className='my-2 font-bold text-2xl'>Rebar Quantity Calculation</h2>
            <form
                onSubmit={formik.handleSubmit}
                className='w-full md:w-1/2 mx-auto grid grid-cols-2 gap-3'
            >
                <div className='col-span-2 flex flex-col md:flex-row gap-3'>
                    <input
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        className="input input-bordered w-full input-sm"
                    />

                    <input
                        name="dealer"
                        type="text"
                        placeholder="Dealer"
                        onChange={formik.handleChange}
                        value={formik.values.dealer}
                        className="input input-bordered w-full input-sm"
                    />

                    <input
                        name="rate"
                        type="number"
                        placeholder="Rate (Ton)"
                        onChange={formik.handleChange}
                        value={formik.values.rate}
                        className="input input-bordered w-full input-sm"
                    />
                </div>

                <input
                    name="rebar08mm"
                    type="number"
                    placeholder="8mm Rebar (Kg)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar08mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar10mm"
                    type="number"
                    placeholder="10mm Rebar (Kg)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar10mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar12mm"
                    type="number"
                    placeholder="12mm Rebar (Kg)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar12mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar16mm"
                    type="number"
                    placeholder="16mm Rebar (Kg)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar16mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar20mm"
                    type="number"
                    placeholder="20mm Rebar (Kg)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar20mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar25mm"
                    type="number"
                    placeholder="25mm Rebar (Kg)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar25mm}
                    className="input input-bordered w-full input-sm"
                />

                <button type='submit' className="btn btn-primary btn-sm">Submit</button>
                <button type='reset' onClick={() => {
                    formik.resetForm();
                    setRebarInfo("");
                }} className="btn btn-primary btn-sm">Reset</button>
            </form>
            {
                rebarInfo &&
                <Result data={rebarInfo} />
            }
        </div>
    );
};

export default Page;