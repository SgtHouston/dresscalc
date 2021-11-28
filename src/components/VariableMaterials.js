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
                        <th className="tableheader">YOU CAN READ AN EXPLANATION FOR EACH LINE BELOW</th>
                        <br/>
                        <th className="tableheader">PRICE or QTY</th>
                        <th className="tableheader">VARIABLE MATERIALS COSTS</th>
                    </tr>
                </thead>

                <tbody >
                    <tr>
                        <td>How Much Does The Main Fabric Cost? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.MainFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, MainFabricPPY: e.target.value })} id='MainFabricPPY' />
                        </td>
                        <td>Main Fabric Price Per Yard</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumMainYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumMainYds: e.target.value })} id='NumMainYds' />
                        </td>
                        <td># Yards Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Lining Fabric Cost Per Yard? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.LiningFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, LiningFabricPPY: e.target.value })} id='LiningFabricPPY' />
                        </td>
                        <td>Lining Fabric Price Per Yard</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumLiningYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLiningYds: e.target.value })} id='NumLiningYds' />
                        </td>
                        <td># Yards Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Specialty Fabric Cost Per Yard? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.SpecialtyFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, SpecialtyFabricPPY: e.target.value })} id='SpecialtyFabricPPY' />
                        </td>
                        <td>Specialty Fabric Price Per Yard</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumSpecYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumSpecYds: e.target.value })} id='NumSpecYds' />
                        </td>
                        <td># Yards Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>What Is The Local Retail Price Of The Crystals Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.CrystalPPPkg} onChange={(e) => setVariableMaterials({ ...variableMaterials, CrystalPPPkg: e.target.value })} id='CrystalPPPkg' />
                        </td>
                        <td>Crystals Price Per Pkg</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Required? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumCrystalPkg} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumCrystalPkg: e.target.value })} id='NumCrystalPkg' />
                        </td>
                        <td># Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Lace/Bead/Rhinestone Trim Costs Per Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.LaceBeadRhineTrim} onChange={(e) => setVariableMaterials({ ...variableMaterials, LaceBeadRhineTrim: e.target.value })} id='LaceBeadRhineTrim' />
                        </td>
                        <td>Lace/Bead/Rhinestone Trim</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Required? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumLaceBeadRhineTrim} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLaceBeadRhineTrim: e.target.value })} id='NumLaceBeadRhineTrim' />
                        </td>
                        <td># Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Do The Lace/Bead/Rhinestone Applique Costs Per Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.LaceBeadRhineApp} onChange={(e) => setVariableMaterials({ ...variableMaterials, LaceBeadRhineApp: e.target.value })} id='LaceBeadRhineApp' />
                        </td>
                        <td>Lace/Bead/Rhinestone Applique</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumLaceBeadRhineApp} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLaceBeadRhineApp: e.target.value })} id='NumLaceBeadRhineApp' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Do The Zippers/Buttons/Fasteners/Hooks Cost Per Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.ZipperButtonHook} onChange={(e) => setVariableMaterials({ ...variableMaterials, ZipperButtonHook: e.target.value })} id='ZipperButtonHook' />
                        </td>
                        <td>Zipper/Buttons/Fastener/Hook</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumZipperButtonHook} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumZipperButtonHook: e.target.value })} id='NumZipperButtonHook' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Horsehair} onChange={(e) => setVariableMaterials({ ...variableMaterials, Horsehair: e.target.value })} id='Horsehair' />
                        </td>
                        <td>Horsehair</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumHorsehair} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumHorsehair: e.target.value })} id='NumHorsehair' />
                        </td>
                        <td># Pkgs Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Thread} onChange={(e) => setVariableMaterials({ ...variableMaterials, Thread: e.target.value })} id='Thread' />
                        </td>
                        <td>Thread</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumThread} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumThread: e.target.value })} id='NumThread' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Embellishment1} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment1: e.target.value })} id='Embellishment1' />
                        </td>
                        <td>Embellishment #1</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumEmbellishment1} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment1: e.target.value })} id='NumEmbellishment1' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Embellishment2} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment2: e.target.value })} id='Embellishment2' />
                        </td>
                        <td>Embellishment #2</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumEmbellishment2} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment2: e.target.value })} id='NumEmbellishment2' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Embellishment3} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment3: e.target.value })} id='Embellishment3' />
                        </td>
                        <td>Embellishment #3</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumEmbellishment3} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment3: e.target.value })} id='NumEmbellishment3' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.HangTag} onChange={(e) => setVariableMaterials({ ...variableMaterials, HangTag: e.target.value })} id='HangTag' />
                        </td>
                        <td>Hang Tag</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Hang Tags At Retail Are Req? ---{'>'}</td>
                        <br/>
                        
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumHangTag} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumHangTag: e.target.value })} id='NumHangTag' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

            </Table>
        
    )
}

export default VariableMaterials

