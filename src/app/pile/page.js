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
            numberOfRebar: '',
            spiralGap: '',
            numberOfLapping: '',
            castingConsider: '',
            rebarConsider: ''
        },
        onSubmit: values => {
            const {dia, depth, numberOfPile, numberOfRebar, spiralGap, numberOfLapping, castingConsider, rebarConsider} = values;

            // Casting
            const radius = (dia / 2) / 12;
            const rebarRadius = radius - 0.25;
            const volume = Math.PI * Math.pow(radius, 2) * depth;
            const totalVolume = volume * numberOfPile;
            const cement = totalVolume * 0.19 + (totalVolume * 0.20) * (castingConsider / 100);
            const sand = totalVolume * 0.55 + (totalVolume * 0.55) * (castingConsider / 100);
            const stone = totalVolume * 0.85 + (totalVolume * 0.85) * (castingConsider / 100);

            // Rebar
            const depthWithLapping = Number(depth) + Number(numberOfLapping) * 2 - 1.5; //Minus 1.5 feet for CC casting
            const rebar16WeightDraft = depthWithLapping * Number(numberOfRebar) * Number(numberOfPile) * 0.48;
            const rebar16Weight = Math.round(rebar16WeightDraft + rebar16WeightDraft * (Number(rebarConsider) / 100));

            const rebar10WeightDraft = ((depthWithLapping * 12) / Number(spiralGap)) * (2 * Math.PI * rebarRadius) * Number(numberOfPile) * 0.188;

            const rebar10Weight = Math.round(rebar10WeightDraft + rebar10WeightDraft * (Number(rebarConsider) / 100) + rebar10WeightDraft * (30 / 100)); // Plus 30% for short gap spiral

            const result = {
                volume: volume.toFixed(0),
                totalVolume: totalVolume.toFixed(0),
                cement: cement.toFixed(0),
                sand: sand.toFixed(0),
                stone: stone.toFixed(0),
                rebar16Weight, rebar10Weight
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
                    name="numberOfRebar"
                    type="number"
                    placeholder="Number of Rebar"
                    onChange={formik.handleChange}
                    value={formik.values.numberOfRebar}
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
                    name="spiralGap"
                    type="number"
                    placeholder="Spiral Gap (Inch)"
                    onChange={formik.handleChange}
                    value={formik.values.spiralGap}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="castingConsider"
                    type="number"
                    placeholder="Casting Consider (%)"
                    onChange={formik.handleChange}
                    value={formik.values.castingConsider}
                    className="input input-bordered w-full input-sm"
                />

                <input
                    name="rebarConsider"
                    type="number"
                    placeholder="Rebar Consider (%)"
                    onChange={formik.handleChange}
                    value={formik.values.rebarConsider}
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