import React, { useState } from 'react'
import '../componentcss/Home.css'
// npm install react-bootstrap@next bootstrap@5.1.1
import VariableMaterials from './VariableMaterials'
import MaintenanceFees from './MaintenanceFees'
import LaborHours from './LaborHours'
import Packaging from './Packaging'
import Fees from './Fees'

function Home() {

    // const VarMaterials = useSelector((state) => state.variableMaterials);
    // console.log("Heres VarMar", VarMaterials)

    function handleSubmit(event) {
        event.preventDefault()
        
        

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
                        <br/>
                        <br/>
                        <MaintenanceFees className="MaintenanceFees" />
                        <br/>
                        <br/>
                        <LaborHours className="LaborHours"/>
                        <br/>
                        <br/>
                        <Packaging className="Packaging"/>
                        <br/>
                        <br/>
                        <Fees className="Fees"/>
                        <br/>
                        <br/>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="CalcColRight">
                        Right
                        <p className="Labor">Total Labor Costs </p>
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
