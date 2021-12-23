import React from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/Fees.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionSetFees } from '../redux/action/fees'



function Fees() {
    
    // Select fees object from global state
    const fees = useSelector (state => state.fees)
    const dispatch = useDispatch()
    
    function setFees(fees) {
        dispatch(actionSetFees(fees))
    }

    return (
        <Table className="table">
            <thead>
                <tr>
                    <th className="tableheader">YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                    <br />
                    <th className="tableheader">FEES</th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td>How Much Is State Tax? ---{'>'}</td>
                    <br />
                    <td>
                        <input className="Fees-Input" value={fees.StateTax} onChange={(e) => setFees({ ...fees, StateTax: (Number(e.target.value)) })} id='StateTax' />
                    </td>
                    <td>State Tax</td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Much Is The Square Processing Fee? ---{'>'}</td>
                    <br />
                    <td>
                        <input className="Fees-Input" value={fees.Processing} onChange={(e) => setFees({ ...fees, Processing: (Number(e.target.value)) })} id='Processing' />
                    </td>
                    <td>Square Processing Fee</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Fees
