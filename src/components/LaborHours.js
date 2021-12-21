import React from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/LaborHours.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionSetLaborHours } from '../redux/action/laborhours'

function LaborHours() {
    
    const laborHours = useSelector (state => state.laborhours)
    const dispatch = useDispatch()
    
    function setLaborHours(laborHours) {
        dispatch(actionSetLaborHours(laborHours))
    }

    return (
        <Table className="table">
            <thead>
                <tr>
                    <th className="tableheader">YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                    <br/>
                    <th className="tableheader">LABOR HOURS</th>
                    <br/>
                    <th className="tableheader">PRICE PER HR</th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td>How Many Hours Of Sewing Will It Take To Create This Garment?</td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.SewingHrs} onChange={(e) => setLaborHours({ ...laborHours, SewingHrs: Number(e.target.value) })} id='SewingHours' /> HRS
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.SewingPriceHr} onChange={(e) => setLaborHours({ ...laborHours, SewingPriceHr: Number(e.target.value) })} id='SewingPriceHr' /> /HR
                    </td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Many Hours Of Pattern-Making Will It Take To Create This Garment?</td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.PatternHrs} onChange={(e) => setLaborHours({ ...laborHours, PatternHrs: Number(e.target.value) })} id='PatternHrs' /> HRS
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.PatternPriceHr} onChange={(e) => setLaborHours({ ...laborHours, PatternPriceHr: Number(e.target.value) })} id='SewingPriceHr' /> /HR
                    </td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Many Hours Of Cutting Will It Take To Create This Garment?</td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.CuttingHrs} onChange={(e) => setLaborHours({ ...laborHours, CuttingHrs: Number(e.target.value) })} id='CuttingHrs' /> HRS
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.CuttingPriceHr} onChange={(e) => setLaborHours({ ...laborHours, CuttingPriceHr: Number(e.target.value) })} id='CuttingPriceHr' /> /HR
                    </td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Many Hours Of Applique/Detail Work Will It Take To Create This Garment?</td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.AppliqueHrs} onChange={(e) => setLaborHours({ ...laborHours, AppliqueHrs: Number(e.target.value) })} id='AppliqueHrs' /> HRS
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.AppliquePriceHr} onChange={(e) => setLaborHours({ ...laborHours, AppliquePriceHr: Number(e.target.value) })} id='AppliquePriceHr' /> /HR
                    </td>
                </tr>
            </tbody>
        </Table>

    )
}

export default LaborHours
