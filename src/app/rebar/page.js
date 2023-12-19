'use client';

import {useFormik} from 'formik';
import React, {useState} from 'react';
import Result from './result';

const Page = () => {
    const [rebarInfo, setRebarInfo] = useState("");

    const formik = useFormik({
        initialValues: {
            rebar08Feet: '',
            rebar08Inch: '',
            rebar08Qnty: '',

            rebar10Feet: '',
            rebar10Inch: '',
            rebar10Qnty: '',

            rebar12Feet: '',
            rebar12Inch: '',
            rebar12Qnty: '',

            rebar16Feet: '',
            rebar16Inch: '',
            rebar16Qnty: '',

            rebar20Feet: '',
            rebar20Inch: '',
            rebar20Qnty: '',

            rebar25Feet: '',
            rebar25Inch: '',
            rebar25Qnty: ''
        },
        onSubmit: values => {
            const {rebar08Feet, rebar08Inch, rebar08Qnty, rebar10Feet, rebar10Inch, rebar10Qnty, rebar12Feet, rebar12Inch, rebar12Qnty, rebar16Feet, rebar16Inch, rebar16Qnty, rebar20Feet, rebar20Inch, rebar20Qnty, rebar25Feet, rebar25Inch, rebar25Qnty} = values;

            const rebar08 = (Number(rebar08Feet) + Number(rebar08Inch) / 12) * Number(rebar08Qnty);
            const rebar10 = (Number(rebar10Feet) + Number(rebar10Inch) / 12) * Number(rebar10Qnty);
            const rebar12 = (Number(rebar12Feet) + Number(rebar12Inch) / 12) * Number(rebar12Qnty);
            const rebar16 = (Number(rebar16Feet) + Number(rebar16Inch) / 12) * Number(rebar16Qnty);
            const rebar20 = (Number(rebar20Feet) + Number(rebar20Inch) / 12) * Number(rebar20Qnty);
            const rebar25 = (Number(rebar25Feet) + Number(rebar25Inch) / 12) * Number(rebar25Qnty);

            const rebar08Length = Math.round(rebar08);
            const rebar10Length = Math.round(rebar10);
            const rebar12Length = Math.round(rebar12);
            const rebar16Length = Math.round(rebar16);
            const rebar20Length = Math.round(rebar20);
            const rebar25Length = Math.round(rebar25);

            const rebar08Weight = Math.round(rebar08Length * 0.120);
            const rebar10Weight = Math.round(rebar10Length * 0.188);
            const rebar12Weight = Math.round(rebar12Length * 0.270);
            const rebar16Weight = Math.round(rebar16Length * 0.480);
            const rebar20Weight = Math.round(rebar20Length * 0.750);
            const rebar25Weight = Math.round(rebar25Length * 1.174);

            const rebarInfo = {
                rebar08Length, rebar08Weight, rebar10Length, rebar10Weight,
                rebar12Length, rebar12Weight, rebar16Length, rebar16Weight,
                rebar20Length, rebar20Weight, rebar25Length, rebar25Weight
            };

            setRebarInfo(rebarInfo);
        },
    });

    return (
        <div className='text-center'>
            <h2 className='my-2 font-bold text-2xl'>Rebar Calculation</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full mx-auto grid grid-cols-1 gap-3'
                >
                    <div className='text-left -mb-2 ml-1'>8mm Rebar</div>
                    <div className='flex gap-3 items-center'>
                        <input
                            name="rebar08Feet"
                            type="number"
                            placeholder="Feet"
                            onChange={formik.handleChange}
                            value={formik.values.rebar08Feet}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar08Inch"
                            type="number"
                            placeholder="Inch"
                            onChange={formik.handleChange}
                            value={formik.values.rebar08Inch}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar08Qnty"
                            type="number"
                            placeholder="Qnty"
                            onChange={formik.handleChange}
                            value={formik.values.rebar08Qnty}
                            className="input input-bordered w-full input-sm"
                        />
                    </div>

                    <div className='text-left -mb-2 ml-1'>10mm Rebar</div>
                    <div className='flex gap-3 items-center'>
                        <input
                            name="rebar10Feet"
                            type="number"
                            placeholder="Feet"
                            onChange={formik.handleChange}
                            value={formik.values.rebar10Feet}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar10Inch"
                            type="number"
                            placeholder="Inch"
                            onChange={formik.handleChange}
                            value={formik.values.rebar10Inch}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar10Qnty"
                            type="number"
                            placeholder="Qnty"
                            onChange={formik.handleChange}
                            value={formik.values.rebar10Qnty}
                            className="input input-bordered w-full input-sm"
                        />
                    </div>

                    <div className='text-left -mb-2 ml-1'>12mm Rebar</div>
                    <div className='flex gap-3 items-center'>
                        <input
                            name="rebar12Feet"
                            type="number"
                            placeholder="Feet"
                            onChange={formik.handleChange}
                            value={formik.values.rebar12Feet}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar12Inch"
                            type="number"
                            placeholder="Inch"
                            onChange={formik.handleChange}
                            value={formik.values.rebar12Inch}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar12Qnty"
                            type="number"
                            placeholder="Qnty"
                            onChange={formik.handleChange}
                            value={formik.values.rebar12Qnty}
                            className="input input-bordered w-full input-sm"
                        />
                    </div>

                    <div className='text-left -mb-2 ml-1'>16mm Rebar</div>
                    <div className='flex gap-3 items-center'>
                        <input
                            name="rebar16Feet"
                            type="number"
                            placeholder="Feet"
                            onChange={formik.handleChange}
                            value={formik.values.rebar16Feet}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar16Inch"
                            type="number"
                            placeholder="Inch"
                            onChange={formik.handleChange}
                            value={formik.values.rebar16Inch}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar16Qnty"
                            type="number"
                            placeholder="Qnty"
                            onChange={formik.handleChange}
                            value={formik.values.rebar16Qnty}
                            className="input input-bordered w-full input-sm"
                        />
                    </div>

                    <div className='text-left -mb-2 ml-1'>20mm Rebar</div>
                    <div className='flex gap-3 items-center'>
                        <input
                            name="rebar20Feet"
                            type="number"
                            placeholder="Feet"
                            onChange={formik.handleChange}
                            value={formik.values.rebar20Feet}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar20Inch"
                            type="number"
                            placeholder="Inch"
                            onChange={formik.handleChange}
                            value={formik.values.rebar20Inch}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar20Qnty"
                            type="number"
                            placeholder="Qnty"
                            onChange={formik.handleChange}
                            value={formik.values.rebar20Qnty}
                            className="input input-bordered w-full input-sm"
                        />
                    </div>

                    <div className='text-left -mb-2 ml-1'>25mm Rebar</div>
                    <div className='flex gap-3 items-center'>
                        <input
                            name="rebar25Feet"
                            type="number"
                            placeholder="Feet"
                            onChange={formik.handleChange}
                            value={formik.values.rebar25Feet}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar25Inch"
                            type="number"
                            placeholder="Inch"
                            onChange={formik.handleChange}
                            value={formik.values.rebar25Inch}
                            className="input input-bordered w-full input-sm"
                        />
                        <input
                            name="rebar25Qnty"
                            type="number"
                            placeholder="Qnty"
                            onChange={formik.handleChange}
                            value={formik.values.rebar25Qnty}
                            className="input input-bordered w-full input-sm"
                        />
                    </div>

                    <div className='flex gap-3'>
                        <button type='submit' className="btn btn-primary btn-sm">Submit</button>
                        <button type='reset' onClick={() => {
                            formik.resetForm();
                            setRebarInfo("");
                        }} className="btn btn-primary btn-sm">Reset</button>
                    </div>
                </form>

                {
                    rebarInfo &&
                    <Result data={rebarInfo} />
                }

            </div>
        </div>
    );
};

export default Page;