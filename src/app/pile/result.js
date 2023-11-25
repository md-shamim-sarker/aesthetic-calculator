import React from 'react';

const Result = ({data}) => {
    const {volume, totalVolume, cement, sand, stone, rebar16Weight, rebar10Weight} = data;
    return (
        < div className='text-center'>
            <h2 className='my-3 font-bold text-2xl'>Result</h2>
            <div className='w-full md:w-1/2 mx-auto border rounded-lg'>
                <table className='w-full md:w-1/2 mx-auto table table-sm text-center'>
                    <tbody>
                        <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>Single Pile Volume</td>
                            <td>{volume} Cft</td>
                        </tr>
                        <tr>
                            <td>Total Pile Volume</td>
                            <td>{totalVolume} Cft</td>
                        </tr>
                        <tr>
                            <td>Cement</td>
                            <td>{cement} Bag</td>
                        </tr>
                        <tr>
                            <td>Sand</td>
                            <td>{sand} Cft</td>
                        </tr>
                        <tr>
                            <td>Stone</td>
                            <td>{stone} Cft</td>
                        </tr>
                        <tr>
                            <td>10mm Rebar</td>
                            <td>{rebar10Weight} Kg</td>
                        </tr>
                        <tr>
                            <td>16mm Rebar</td>
                            <td>{rebar16Weight} Kg</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Result;