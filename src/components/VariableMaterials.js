import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/VariableMaterials.css'

function VariableMaterials() {

    const [variableMaterials, setVariableMaterials] = useState({
        MainFabricPPY: 0,
        NumMainYds: 0,
        LiningFabricPPY: 0,
        NumLiningYds: 0,
        SpecialtyFabricPPY: 0,
        NumSpecYds: 0,
        CrystalPPPkg: 0,
        NumCrystalPkg: 0,
        LaceBeadRhineTrim: 0,
        NumLaceBeadRhineTrim: 0,
        LaceBeadRhineApp: 0,
        NumLaceBeadRhineApp: 0,
        ZipperButtonHook: 8,
        NumZipperButtonHook: 1,
        Horsehair: 0,
        NumHorsehair: 0,
        Thread: 3.00,
        NumThread: 1,
        Embellishment1: 0,
        NumEmbellishment1: 0,
        Embellishment2: 0,
        NumEmbellishment2: 0,
        Embellishment3: 0,
        NumEmbellishment3: 0,
        HangTag: 5.00,
        NumHangTag: 1
    })

    const sum = (variableMaterials.MainFabricPPY * variableMaterials.NumMainYds)
    console.log(sum)


    return (
        
            <Table className="table" >
                <thead>
                    <tr>
                        <th>YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                        <th>VARIABLE MATERIALS COSTS</th>
                        <th>PRICE or QTY</th>
                    </tr>
                </thead>

                <tbody >
                    <tr>
                        <td>How Much Does The Main Fabric Cost? ---{'>'}</td>
                        <td>Main Fabric Price Per Yard</td>
                        <td>
                            <input className="VMC-Input" value={variableMaterials.MainFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, MainFabricPPY: e.target.value })} id='MainFabricPPY' />
                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <td># Yards Required</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumMainYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumMainYds: e.target.value })} id='NumMainYds' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Lining Fabric Cost Per Yard? ---{'>'}</td>
                        <td>Lining Fabric Price Per Yard</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.LiningFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, LiningFabricPPY: e.target.value })} id='LiningFabricPPY' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <td># Yards Required</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumLiningYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLiningYds: e.target.value })} id='NumLiningYds' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Specialty Fabric Cost Per Yard? ---{'>'}</td>
                        <td>Specialty Fabric Price Per Yard</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.SpecialtyFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, SpecialtyFabricPPY: e.target.value })} id='SpecialtyFabricPPY' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <td># Yards Required</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumSpecYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumSpecYds: e.target.value })} id='NumSpecYds' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>What Is The Local Retail Price Of The Crystals Pkg? ---{'>'}</td>
                        <td>Crystals Price Per Pkg</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.CrystalPPPkg} onChange={(e) => setVariableMaterials({ ...variableMaterials, CrystalPPPkg: e.target.value })} id='CrystalPPPkg' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Required? ---{'>'}</td>
                        <td># Required</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumCrystalPkg} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumCrystalPkg: e.target.value })} id='NumCrystalPkg' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Lace/Bead/Rhinestone Trim Costs Per Pkg? ---{'>'}</td>
                        <td>Lace/Bead/Rhinestone Trim</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.LaceBeadRhineTrim} onChange={(e) => setVariableMaterials({ ...variableMaterials, LaceBeadRhineTrim: e.target.value })} id='LaceBeadRhineTrim' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Required? ---{'>'}</td>
                        <td># Required</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumLaceBeadRhineTrim} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLaceBeadRhineTrim: e.target.value })} id='NumLaceBeadRhineTrim' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Do The Lace/Bead/Rhinestone Applique Costs Per Pkg? ---{'>'}</td>
                        <td>Lace/Bead/Rhinestone Applique</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.LaceBeadRhineApp} onChange={(e) => setVariableMaterials({ ...variableMaterials, LaceBeadRhineApp: e.target.value })} id='LaceBeadRhineApp' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <td># Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumLaceBeadRhineApp} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLaceBeadRhineApp: e.target.value })} id='NumLaceBeadRhineApp' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Do The Zippers/Buttons/Fasteners/Hooks Cost Per Pkg? ---{'>'}</td>
                        <td>Zipper/Buttons/Fastener/Hook</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.ZipperButtonHook} onChange={(e) => setVariableMaterials({ ...variableMaterials, ZipperButtonHook: e.target.value })} id='ZipperButtonHook' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <td># Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumZipperButtonHook} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumZipperButtonHook: e.target.value })} id='NumZipperButtonHook' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <td>Horsehair</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.Horsehair} onChange={(e) => setVariableMaterials({ ...variableMaterials, Horsehair: e.target.value })} id='Horsehair' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <td># Pkgs Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumHorsehair} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumHorsehair: e.target.value })} id='NumHorsehair' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <td>Thread</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.Thread} onChange={(e) => setVariableMaterials({ ...variableMaterials, Thread: e.target.value })} id='Thread' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <td># Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumThread} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumThread: e.target.value })} id='NumThread' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <td>Embellishment #1</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.Embellishment1} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment1: e.target.value })} id='Embellishment1' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <td># Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumEmbellishment1} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment1: e.target.value })} id='NumEmbellishment1' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <td>Embellishment #2</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.Embellishment2} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment2: e.target.value })} id='Embellishment2' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <td># Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumEmbellishment2} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment2: e.target.value })} id='NumEmbellishment2' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <td>Embellishment #3</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.Embellishment3} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment3: e.target.value })} id='Embellishment3' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <td># Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumEmbellishment3} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment3: e.target.value })} id='NumEmbellishment3' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <td>Hang Tag</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.HangTag} onChange={(e) => setVariableMaterials({ ...variableMaterials, HangTag: e.target.value })} id='HangTag' />

                        </td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Hang Tags At Retail Are Req? ---{'>'}</td>
                        <td># Req</td>
                        <td>

                            <input className="VMC-Input" value={variableMaterials.NumHangTag} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumHangTag: e.target.value })} id='NumHangTag' />

                        </td>
                    </tr>
                </tbody>

            </Table>
        
    )
}

export default VariableMaterials

