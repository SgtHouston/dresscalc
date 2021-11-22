import React, { useState } from 'react'
import '../componentcss/Home.css'
import { db } from '../db.js'
// npm install react-bootstrap@next bootstrap@5.1.1
import { Table } from 'react-bootstrap'
import VariableMaterials from './VariableMaterials'
import { useSelector } from 'react-redux'




function Home() {

    // const VarMaterials = useSelector((state) => state.variableMaterials);
    // console.log("Heres VarMar", VarMaterials)

    function handleSubmit(event) {
        event.preventDefault()
        // setVariableMaterials({
        //     ...variableMaterials,
        //     MainFabricPPY: variableMaterials.MainFabricPPY,
        //     NumMainYds: variableMaterials.NumMainYds,
        //     LiningFabricPPY: variableMaterials.LiningFabricPPY,
        //     NumLiningYds: variableMaterials.NumLiningYds,
        //     SpecialtyFabricPPY: variableMaterials.SpecialtyFabricPPY,
        //     NumSpecYds: variableMaterials.NumSpecYds,
        //     CrystalPPPkg: variableMaterials.CrystalPPPkg,
        //     NumCrystalPkg: variableMaterials.NumCrystalPkg,
        //     LaceBeadRhineTrim: variableMaterials.LaceBeadRhineTrim,
        //     NumLaceBeadRhineTrim: variableMaterials.NumLaceBeadRhineTrim,
        //     LaceBeadRhineApp: variableMaterials.LaceBeadRhineApp,
        //     NumLaceBeadRhineApp: variableMaterials.NumLaceBeadRhineApp,
        //     ZipperButtonHook: variableMaterials.ZipperButtonHook,
        //     NumZipperButtonHook: variableMaterials.NumZipperButtonHook,
        //     Horsehair: variableMaterials.Horsehair,
        //     NumHorsehair: variableMaterials.NumHorsehair,
        //     Thread: variableMaterials.Thread,
        //     NumThread: variableMaterials.NumThread,
        //     Embellishment1: variableMaterials.Embellishment1,
        //     NumEmbellishment1: variableMaterials.NumEmbellishment1,
        //     Embellishment2: variableMaterials.Embellishment2,
        //     NumEmbellishment2: variableMaterials.NumEmbellishment2,
        //     Embellishment3: variableMaterials.Embellishment3,
        //     NumEmbellishment3: variableMaterials.NumEmbellishment3,
        //     HangTag: variableMaterials.HangTag,
        //     NumHangTag: variableMaterials.NumHangTag
        // })

        // console.log("Here is the variableMaterials", variableMaterials)

    }


    return (
        <div className="CalcHome">
            <div className="CalcHeader">
                Calc Header
            </div>
            <div className="CalcTitle">
                <p>DRESS PRICING CALCULATOR</p>
                <p>YELLOW BOXES REQUIRE YOUR INPUT FOR CALCULATIONS</p>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="Calculator">
                    <div className="CalcColLeft">
                        Left
                        <VariableMaterials className="VariableMaterials" />
                        <div className="MaintenanceFees">2</div>
                        <div className="LaborHours">3</div>
                        <div className="Packaging">4</div>
                        <div className="Fees">5</div>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="CalcColRight">
                        Right
                        <p className="Labor">Total Labor Costs</p>
                        <p className="Material">Total Material Costs</p>
                        <p className="FeesTotal">Total Fees</p>
                        <p className="WholesaleProm">Wholesale Price --- Prom Event</p>
                        <p className="WholesaleBridal">Wholesale Price --- Bridal Event</p>
                        <p className="RetailProm">Retail Price --- Prom Event</p>
                        <p className="RetailBridal">Retail Price --- Bridal Event</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home
