import React from 'react'
import { Table } from 'react-bootstrap'
import '../componentcss/VariableMaterials.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionSetVarMaterials } from '../redux/action/variablematerials'

function VariableMaterials() {

    const variableMaterials = useSelector (state => state.variablematerials)
    const dispatch = useDispatch()

    function setVariableMaterials(variableMaterials) {
        dispatch(actionSetVarMaterials(variableMaterials))
    }


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
                            $ <input className="VMC-Input" value={variableMaterials.MainFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, MainFabricPPY: Number(e.target.value) })} type="number" step="any"  id='MainFabricPPY' />
                        </td>
                        <td>Main Fabric Price Per Yard</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumMainYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumMainYds: Number(e.target.value) })} type="number" step="any" id='NumMainYds' />
                        </td>
                        <td># Yards Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Lining Fabric Cost Per Yard? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.LiningFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, LiningFabricPPY: Number(e.target.value) })} type="number" step="any" id='LiningFabricPPY' />
                        </td>
                        <td>Lining Fabric Price Per Yard</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumLiningYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLiningYds: Number(e.target.value) })} type="number" step="any" id='NumLiningYds' />
                        </td>
                        <td># Yards Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Specialty Fabric Cost Per Yard? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.SpecialtyFabricPPY} onChange={(e) => setVariableMaterials({ ...variableMaterials, SpecialtyFabricPPY: Number(e.target.value) })} type="number" step="any" id='SpecialtyFabricPPY' />
                        </td>
                        <td>Specialty Fabric Price Per Yard</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Of This Fabric Will I Use? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumSpecYds} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumSpecYds: Number(e.target.value) })} type="number" step="any" id='NumSpecYds' />
                        </td>
                        <td># Yards Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>What Is The Local Retail Price Of The Crystals Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.CrystalPPPkg} onChange={(e) => setVariableMaterials({ ...variableMaterials, CrystalPPPkg: Number(e.target.value) })} type="number" step="any" id='CrystalPPPkg' />
                        </td>
                        <td>Crystals Price Per Pkg</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Required? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumCrystalPkg} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumCrystalPkg: Number(e.target.value) })} type="number" step="any" id='NumCrystalPkg' />
                        </td>
                        <td># Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Does The Lace/Bead/Rhinestone Trim Costs Per Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.LaceBeadRhineTrim} onChange={(e) => setVariableMaterials({ ...variableMaterials, LaceBeadRhineTrim: Number(e.target.value) })} type="number" step="any" id='LaceBeadRhineTrim' />
                        </td>
                        <td>Lace/Bead/Rhinestone Trim</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Required? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumLaceBeadRhineTrim} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLaceBeadRhineTrim: Number(e.target.value) })} type="number" step="any" id='NumLaceBeadRhineTrim' />
                        </td>
                        <td># Required</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Do The Lace/Bead/Rhinestone Applique Costs Per Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.LaceBeadRhineApp} onChange={(e) => setVariableMaterials({ ...variableMaterials, LaceBeadRhineApp: Number(e.target.value) })} type="number" step="any" id='LaceBeadRhineApp' />
                        </td>
                        <td>Lace/Bead/Rhinestone Applique</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumLaceBeadRhineApp} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumLaceBeadRhineApp: Number(e.target.value) })} type="number" step="any" id='NumLaceBeadRhineApp' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Do The Zippers/Buttons/Fasteners/Hooks Cost Per Pkg? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.ZipperButtonHook} onChange={(e) => setVariableMaterials({ ...variableMaterials, ZipperButtonHook: Number(e.target.value) })} type="number" step="any" id='ZipperButtonHook' />
                        </td>
                        <td>Zipper/Buttons/Fastener/Hook</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumZipperButtonHook} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumZipperButtonHook: Number(e.target.value) })} type="number" step="any" id='NumZipperButtonHook' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Horsehair} onChange={(e) => setVariableMaterials({ ...variableMaterials, Horsehair: Number(e.target.value) })} type="number" step="any" id='Horsehair' />
                        </td>
                        <td>Horsehair</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumHorsehair} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumHorsehair: Number(e.target.value) })} type="number" step="any" id='NumHorsehair' />
                        </td>
                        <td># Pkgs Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Thread} onChange={(e) => setVariableMaterials({ ...variableMaterials, Thread: Number(e.target.value) })} type="number" step="any" id='Thread' />
                        </td>
                        <td>Thread</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumThread} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumThread: Number(e.target.value) })} type="number" step="any" id='NumThread' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Embellishment1} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment1: Number(e.target.value) })} type="number" step="any" id='Embellishment1' />
                        </td>
                        <td>Misc #1</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumEmbellishment1} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment1: Number(e.target.value) })} type="number" step="any" id='NumEmbellishment1' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Embellishment2} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment2: Number(e.target.value) })} type="number" step="any" id='Embellishment2' />
                        </td>
                        <td>Misc #2</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Yards Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumEmbellishment2} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment2: Number(e.target.value) })} type="number" step="any" id='NumEmbellishment2' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.Embellishment3} onChange={(e) => setVariableMaterials({ ...variableMaterials, Embellishment3: Number(e.target.value) })} type="number" step="any" id='Embellishment3' />
                        </td>
                        <td>Misc #3</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Packages At Retail Are Req? ---{'>'}</td>
                        <br/>
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumEmbellishment3} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumEmbellishment3: Number(e.target.value) })} type="number" step="any" id='NumEmbellishment3' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Much Per Package At Retail? ---{'>'}</td>
                        <br/>
                        <td>
                            $ <input className="VMC-Input" value={variableMaterials.HangTag} onChange={(e) => setVariableMaterials({ ...variableMaterials, HangTag: Number(e.target.value) })} type="number" step="any" id='HangTag' />
                        </td>
                        <td>Hang Tag</td>
                    </tr>
                </tbody>

                <tbody >
                    <tr>
                        <td>How Many Hang Tags At Retail Are Req? ---{'>'}</td>
                        <br/>
                        
                        <td>
                            <input className="VMC-Input alt-input" value={variableMaterials.NumHangTag} onChange={(e) => setVariableMaterials({ ...variableMaterials, NumHangTag: Number(e.target.value) })} type="number" step="any" id='NumHangTag' />
                        </td>
                        <td># Req</td>
                    </tr>
                </tbody>

            </Table>
        
    )
}

export default VariableMaterials

