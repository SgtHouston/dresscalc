import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/Fees.css'


function Fees() {
    const [fees, setFees] = useState({
        StateTax : 0.04,
        Processing : 0.029
    })

    return (
        <Table className="table">
            <thead>
                <tr>
                    <th className="tableheader">YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                    <br/>
                    <th className="tableheader">fees</th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td>How Much Is State Tax? ---{'>'}</td>
                    <br/>
                    <td>
                        <input className="Fees-Input" value={fees.StateTax} onChange={(e) => setFees({ ...fees, StateTax: e.target.value })} id='StateTax' />
                    </td>
                    <td>Georgia State Tax</td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Much Is The Square Processing Fee? ---{'>'}</td>
                    <br/>
                    <td>
                        <input className="Fees-Input" value={fees.Processing} onChange={(e) => setFees({ ...fees, Processing: e.target.value })} id='Processing' />
                    </td>
                    <td>Square Processing Fee</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Fees
