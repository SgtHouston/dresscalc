import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/MaintenanceFees.css'

function MaintenanceFees() {

    const [maintFees, setMaintFees] = useState({
        SewingMachineMaintFee : 30,
        ShopMaintUtilFee : 30
    })

    return (
        <Table className="table">
            <thead>
                <tr>
                    <th>YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                    <th>MAINTENANCE FEES</th>
                    <th>PRICE</th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td>Charged For Sewing Machine Maintenance Over Time ---{'>'}</td>
                    <td>Sewing Machine Fee</td>
                    <td>
                        <input className="Maint-Input" value={maintFees.SewingMachineMaintFee} onChange={(e) => setMaintFees({ ...maintFees, SewingMachineMaintFee: e.target.value })} id='SewingMachineMaintFee' />
                    </td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>Charged For Cleanup and Disposal of Scrap Materials ---{'>'}</td>
                    <td>Shop Maintenance & Utilties Fee</td>
                    <td>
                        <input className="Maint-Input" value={maintFees.ShopMaintUtilFee} onChange={(e) => setMaintFees({ ...maintFees, ShopMaintUtilFee: e.target.value })} id='ShopMaintUtilFee' />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MaintenanceFees
