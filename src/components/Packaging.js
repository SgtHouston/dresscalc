import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/Packaging.css'

function Packaging() {

    const [packaging, setPackaging] = useState({
        GarmentBags : 30,
        TagsPinsBoxes : 30
    })

    return (
        <Table className="table">
            <thead>
                <tr>
                    <th className="tableheader">YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                    <br/>
                    <th className="tableheader">PRICE</th>
                    <th className="tableheader">PACKAGING PRESENTATION</th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td>How Much Are The SLR Couture Garment Bags? ---{'>'}</td>
                    <br/>
                    <td>
                        $ <input className="Packaging-Input" value={packaging.GarmentBags} onChange={(e) => setPackaging({ ...packaging, GarmentBags: e.target.value })} id='GarmentBags' />
                    </td>
                    <td>Garment Bags</td>
                </tr>
            </tbody>

            <tbody >
                <tr>
                    <td>Charged For Cleanup And Disposal Of Scrap Materials ---{'>'}</td>
                    <br/>
                    <td>
                        $ <input className="Packaging-Input" value={packaging.TagsPinsBoxes} onChange={(e) => setPackaging({ ...packaging, TagsPinsBoxes: e.target.value })} id='TagsPinsBoxes' />
                    </td>
                    <td>Shop Maintenance & Util. Fee</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Packaging
