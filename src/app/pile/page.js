'use client';

import {useFormik} from 'formik';
import React, {useState} from 'react';
import Result from './result';

const Page = () => {
    const [result, setResult] = useState("");

    const formik = useFormik({
        initialValues: {
            dia: '',
            depth: '',
            numberOfPile: '',
            spiralGap: '',
            numberOfLapping: '',
            consider: ''
        },
        onSubmit: values => {
            const {dia, depth, numberOfPile, spiralGap, numberOfLapping, consider} = values;
            const radius = (dia / 2) / 12;
            const volume = Math.PI * Math.pow(radius, 2) * depth;
            const totalVolume = volume * numberOfPile;
            const cement = totalVolume * 0.21;
            const sand = totalVolume * 0.6;
            const stone = totalVolume * 0.85;

            const result = {
                volume: volume.toFixed(0),
                totalVolume: totalVolume.toFixed(0),
                cement: cement.toFixed(0),
                sand: sand.toFixed(0),
                stone: stone.toFixed(0)
            };

            setResult(result);
        },
    });

    return (
        <div className='text-center'>
            <h2 className='my-2 font-bold text-2xl'>Pile Calculation</h2>
            <form
                onSubmit={formik.handleSubmit}
                className='w-full md:w-1/2 mx-auto grid grid-cols-2 gap-3'
            >
                <input
                    name="dia"
                    type="number"
                    placeholder="Dia (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.dia}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="depth"
                    type="number"
                    placeholder="Depth (Feet)"
                    onChange={formik.handleChange}
                    value={formik.values.depth}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="numberOfPile"
                    type="number"
                    placeholder="Number of Pile"
                    onChange={formik.handleChange}
                    value={formik.values.numberOfPile}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="spiralGap"
                    type="number"
                    placeholder="Spiral Gap (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.spiralGap}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="numberOfLapping"
                    type="number"
                    placeholder="Number of Lapping"
                    onChange={formik.handleChange}
                    value={formik.values.numberOfLapping}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="consider"
                    type="number"
                    placeholder="Consider (%)"
                    onChange={formik.handleChange}
                    value={formik.values.consider}
                    className="input input-bordered w-full input-sm"
                />

                <button type='submit' className="btn btn-primary btn-sm">Submit</button>
                <button type='reset' onClick={() => {
                    formik.resetForm();
                    setResult("");
                }} className="btn btn-primary btn-sm">Reset</button>
            </form>

            {
                result && <Result data={result} />
            }
        </div>
    );
};

export default Page;