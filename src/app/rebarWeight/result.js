import React from 'react';
import dateFormat from 'dateformat';

const Result = ({data}) => {
    return (
        < div className='w-full md:w-1/2 mx-auto text-center'>
            <h2 className='my-3 font-bold text-2xl'>Rebar Information</h2>
            <div className='flex flex-col md:flex-row justify-between p-2 font-bold bg-blue-200 mb-3'>
                <h2>Date: {dateFormat(data.date, "dd-mm-yyyy")}</h2>
                <h2>Dealer: {data.dealer}</h2>
                <h2>Price: {data.totalPrice} Taka</h2>
            </div>
            <table className='table table-sm border'>
                <tbody className='text-center'>
                    <tr>
                        <th>Rebar</th>
                        <th>Weight</th>
                        <th>Weight</th>
                    </tr>
                    {
                        data.rebar08mmWeight > 0 &&
                        <tr>
                            <td>8mm</td>
                            <td>{data.rebar08mmWeight} Kg</td>
                            <td>{(data.rebar08mmWeight / 1000).toFixed(3)} Ton</td>
                        </tr>
                    }
                    {
                        data.rebar10mmWeight > 0 &&
                        <tr>
                            <td>10mm</td>
                            <td>{data.rebar10mmWeight} Kg</td>
                            <td>{(data.rebar10mmWeight / 1000).toFixed(3)} Ton</td>
                        </tr>
                    }
                    {
                        data.rebar12mmWeight > 0 &&
                        <tr>
                            <td>12mm</td>
                            <td>{data.rebar12mmWeight} Kg</td>
                            <td>{(data.rebar12mmWeight / 1000).toFixed(3)} Ton</td>
                        </tr>
                    }
                    {
                        data.rebar16mmWeight > 0 &&
                        <tr>
                            <td>16mm</td>
                            <td>{data.rebar16mmWeight} Kg</td>
                            <td>{(data.rebar16mmWeight / 1000).toFixed(3)} Ton</td>
                        </tr>
                    }
                    {
                        data.rebar20mmWeight > 0 &&
                        <tr>
                            <td>20mm</td>
                            <td>{data.rebar20mmWeight} Kg</td>
                            <td>{(data.rebar20mmWeight / 1000).toFixed(3)} Ton</td>
                        </tr>
                    }
                    {
                        data.rebar25mmWeight > 0 &&
                        <tr>
                            <td>25mm</td>
                            <td>{data.rebar25mmWeight} Kg</td>
                            <td>{(data.rebar25mmWeight / 1000).toFixed(3)} Ton</td>
                        </tr>
                    }
                    <tr className='font-bold'>
                        <td>Total</td>
                        <td>{data.totalRebarWeight} Kg</td>
                        <td>{(data.totalRebarWeight / 1000).toFixed(3)} Ton</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Result;