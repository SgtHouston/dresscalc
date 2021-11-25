import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/LaborHours.css'

function LaborHours() {
    
    const [laborHours, setLaborHours] = useState({
        SewingHrs : 10,
        PatternHrs : 1,
        CuttingHrs : 1,
        AppliqueHrs : 0,
        SewingPriceHr: 65,
        PatternPriceHr : 50,
        CutttingPriceHr : 20,
        AppliquePriceHr : 75
    })

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
                        <input className="Labor-Input" value={laborHours.SewingHrs} onChange={(e) => setLaborHours({ ...laborHours, SewingHrs: e.target.value })} id='SewingHours' />
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.SewingPriceHr} onChange={(e) => setLaborHours({ ...laborHours, SewingPriceHr: e.target.value })} id='SewingPriceHr' />
                    </td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Many Hours Of Pattern-Making Will It Take To Create This Garment?</td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.PatternHrs} onChange={(e) => setLaborHours({ ...laborHours, PatternHrs: e.target.value })} id='PatternHrs' />
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.PatternPriceHr} onChange={(e) => setLaborHours({ ...laborHours, SewingPriceHr: e.target.value })} id='SewingPriceHr' />
                    </td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Many Hours Of Cutting Will It Take To Create This Garment?</td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.CuttingHrs} onChange={(e) => setLaborHours({ ...laborHours, CuttingHrs: e.target.value })} id='CuttingHrs' />
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.CutttingPriceHr} onChange={(e) => setLaborHours({ ...laborHours, CutttingPriceHr: e.target.value })} id='CutttingPriceHr' />
                    </td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>How Many Hours Of Applique/Detail Work Will It Take To Create This Garment?</td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.AppliqueHrs} onChange={(e) => setLaborHours({ ...laborHours, AppliqueHrs: e.target.value })} id='AppliqueHrs' />
                    </td>
                    <br/>
                    <td>
                        <input className="Labor-Input" value={laborHours.AppliquePriceHr} onChange={(e) => setLaborHours({ ...laborHours, AppliquePriceHr: e.target.value })} id='AppliquePriceHr' />
                    </td>
                </tr>
            </tbody>
        </Table>

    )
}

export default LaborHours
