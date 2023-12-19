import React from 'react';

const Result = ({data}) => {
    return (
        < div className='w-full mx-auto text-center'>
            <h2 className='my-3 font-bold text-2xl'>Rebar Information</h2>

            <table className='table table-sm border'>
                <tbody className='text-center'>
                    <tr>
                        <th>Rebar</th>
                        <th>Length</th>
                        <th>Weight</th>
                    </tr>
                    {
                        data.rebar08Weight > 0 &&
                        <tr>
                            <td>8mm</td>
                            <td>{data.rebar08Length} Feet</td>
                            <td>{data.rebar08Weight} Kg</td>
                        </tr>
                    }
                    {
                        data.rebar10Weight > 0 &&
                        <tr>
                            <td>10mm</td>
                            <td>{data.rebar08Length} Feet</td>
                            <td>{data.rebar08Weight} Kg</td>
                        </tr>
                    }
                    {
                        data.rebar12Weight > 0 &&
                        <tr>
                            <td>12mm</td>
                            <td>{data.rebar08Length} Feet</td>
                            <td>{data.rebar08Weight} Kg</td>
                        </tr>
                    }
                    {
                        data.rebar16Weight > 0 &&
                        <tr>
                            <td>16mm</td>
                            <td>{data.rebar08Length} Feet</td>
                            <td>{data.rebar08Weight} Kg</td>
                        </tr>
                    }
                    {
                        data.rebar20Weight > 0 &&
                        <tr>
                            <td>20mm</td>
                            <td>{data.rebar08Length} Feet</td>
                            <td>{data.rebar08Weight} Kg</td>
                        </tr>
                    }
                    {
                        data.rebar25Weight > 0 &&
                        <tr>
                            <td>25mm</td>
                            <td>{data.rebar08Length} Feet</td>
                            <td>{data.rebar08Weight} Kg</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Result;