import React from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/MaintenanceFees.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionSetMaintenanceFees } from '../redux/action/maintenancefees'

function MaintenanceFees() {

    const maintFees = useSelector (state => state.maintenancefees)
    const dispatch = useDispatch()
    
    function setMaintFees(maintFees) {
        dispatch(actionSetMaintenanceFees(maintFees))
    }


    return (
        <Table className="table">
            <thead>
                <tr>
                    <th className="tableheader">YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                    <br/>
                    <th className="tableheader">PRICE</th>
                    <th className="tableheader">MAINTENANCE FEES</th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td>Charged For Sewing Machine Maintenance Over Time ---{'>'}</td>
                    <br/>
                    <td>
                        <input className="Maint-Input" value={maintFees.SewingMachineMaintFee} onChange={(e) => setMaintFees({ ...maintFees, SewingMachineMaintFee: Number(e.target.value) })} id='SewingMachineMaintFee' />
                    </td>
                    <td>Sewing Machine Fee</td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>Charged For Cleanup and Disposal of Scrap Materials ---{'>'}</td>
                    <br/>
                    <td>
                        <input className="Maint-Input" value={maintFees.ShopMaintUtilFee} onChange={(e) => setMaintFees({ ...maintFees, ShopMaintUtilFee: Number(e.target.value) })} id='ShopMaintUtilFee' />
                    </td>
                    <td>Shop Maintenance & Util. Fee</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MaintenanceFees
