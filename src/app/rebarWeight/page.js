'use client';

import {useFormik} from 'formik';
import React, {useState} from 'react';
import dateFormat from 'dateformat';

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

            const rebar08mmWeight = (rebar08mm * 39.5 * 0.120).toFixed(3);
            const rebar10mmWeight = (rebar10mm * 39.5 * 0.188).toFixed(3);
            const rebar12mmWeight = (rebar12mm * 39.5 * 0.270).toFixed(3);
            const rebar16mmWeight = (rebar16mm * 39.5 * 0.480).toFixed(3);
            const rebar20mmWeight = (rebar20mm * 39.5 * 0.751).toFixed(3);
            const rebar25mmWeight = (rebar25mm * 39.5 * 1.174).toFixed(3);

            const totalRebarWeight = Number(rebar08mmWeight) + Number(rebar10mmWeight) + Number(rebar12mmWeight) + Number(rebar16mmWeight) + Number(rebar20mmWeight) + Number(rebar25mmWeight);

            const totalPrice = ((totalRebarWeight / 1000) * rate).toFixed(2);

            const rebarInfo = {date, dealer, rate, rebar08mmWeight, rebar10mmWeight, rebar12mmWeight, rebar16mmWeight, rebar20mmWeight, rebar25mmWeight, totalRebarWeight, totalPrice};

            setRebarInfo(rebarInfo);
        },
    });

    return (
        <div className='text-center'>
            <h2 className='my-2 font-bold text-2xl'>Rebar Weight Calculation</h2>
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
                    placeholder="8mm Rebar (Qnty)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar08mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar10mm"
                    type="number"
                    placeholder="10mm Rebar (Qnty)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar10mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar12mm"
                    type="number"
                    placeholder="12mm Rebar (Qnty)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar12mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar16mm"
                    type="number"
                    placeholder="16mm Rebar (Qnty)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar16mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar20mm"
                    type="number"
                    placeholder="20mm Rebar (Qnty)"
                    onChange={formik.handleChange}
                    value={formik.values.rebar20mm}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebar25mm"
                    type="number"
                    placeholder="25mm Rebar (Qnty)"
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
                < div className='w-full md:w-1/2 mx-auto text-center'>
                    <h2 className='my-3 font-bold text-2xl'>Rebar Information</h2>
                    <div className='flex flex-col md:flex-row justify-between p-2 font-bold bg-blue-200 mb-3'>
                        <h2>Date: {dateFormat(rebarInfo.date, "dd-mm-yyyy")}</h2>
                        <h2>Dealer: {rebarInfo.dealer}</h2>
                        <h2>Price: {rebarInfo.totalPrice} Taka</h2>
                    </div>
                    <table className='table table-sm border'>
                        <tbody className='text-center'>
                            <tr>
                                <th>Rebar Type</th>
                                <th>Weight (Kg)</th>
                                <th>Weight (Ton)</th>
                            </tr>
                            {
                                rebarInfo.rebar08mmWeight > 0 &&
                                <tr>
                                    <td>8mm Rebar</td>
                                    <td>{rebarInfo.rebar08mmWeight} Kg</td>
                                    <td>{(rebarInfo.rebar08mmWeight / 1000).toFixed(3)} Ton</td>
                                </tr>
                            }
                            {
                                rebarInfo.rebar10mmWeight > 0 &&
                                <tr>
                                    <td>10mm Rebar</td>
                                    <td>{rebarInfo.rebar10mmWeight} Kg</td>
                                    <td>{(rebarInfo.rebar10mmWeight / 1000).toFixed(3)} Ton</td>
                                </tr>
                            }
                            {
                                rebarInfo.rebar12mmWeight > 0 &&
                                <tr>
                                    <td>12mm Rebar</td>
                                    <td>{rebarInfo.rebar12mmWeight} Kg</td>
                                    <td>{(rebarInfo.rebar12mmWeight / 1000).toFixed(3)} Ton</td>
                                </tr>
                            }
                            {
                                rebarInfo.rebar16mmWeight > 0 &&
                                <tr>
                                    <td>16mm Rebar</td>
                                    <td>{rebarInfo.rebar16mmWeight} Kg</td>
                                    <td>{(rebarInfo.rebar16mmWeight / 1000).toFixed(3)} Ton</td>
                                </tr>
                            }
                            {
                                rebarInfo.rebar20mmWeight > 0 &&
                                <tr>
                                    <td>20mm Rebar</td>
                                    <td>{rebarInfo.rebar20mmWeight} Kg</td>
                                    <td>{(rebarInfo.rebar20mmWeight / 1000).toFixed(3)} Ton</td>
                                </tr>
                            }
                            {
                                rebarInfo.rebar25mmWeight > 0 &&
                                <tr>
                                    <td>25mm Rebar</td>
                                    <td>{rebarInfo.rebar25mmWeight} Kg</td>
                                    <td>{(rebarInfo.rebar25mmWeight / 1000).toFixed(3)} Ton</td>
                                </tr>
                            }
                            <tr className='font-bold'>
                                <td>Total Weight</td>
                                <td>{rebarInfo.totalRebarWeight} Kg</td>
                                <td>{(rebarInfo.totalRebarWeight / 1000).toFixed(3)} Ton</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Page;