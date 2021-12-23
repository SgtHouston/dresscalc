import React from 'react'
import '../componentcss/Home.css'
// npm install react-bootstrap@next bootstrap@5.1.1
import VariableMaterials from './VariableMaterials'
import MaintenanceFees from './MaintenanceFees'
import LaborHours from './LaborHours'
import Packaging from './Packaging'
import Fees from './Fees'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionSetResults } from '../redux/action/results'

function Home() {

    const handleSubmit = event => {
        // on submit, capture info in fields
        event.preventDefault()
        
        // calculate labor costs
        const totalLabor = (
            (laborHours.SewingHrs * laborHours.SewingPriceHr ) + 
            (laborHours.PatternHrs * laborHours.PatternPriceHr) + 
            (laborHours.CuttingHrs * laborHours.CuttingPriceHr) + 
            (laborHours.AppliqueHrs * laborHours.AppliquePriceHr)
        )
        // calculate materials costs
        const totalMaterials = (
            (variableMaterials.MainFabricPPY * variableMaterials.NumMainYds) + 
            (variableMaterials.LiningFabricPPY  * variableMaterials.NumLiningYds) + 
            (variableMaterials.SpecialtyFabricPPY * variableMaterials.NumSpecYds) + 
            (variableMaterials.NumCrystalPkg * variableMaterials.CrystalPPPkg) +
            (variableMaterials.LaceBeadRhineTrim * variableMaterials.NumLaceBeadRhineTrim) +
            (variableMaterials.LaceBeadRhineApp * variableMaterials.NumLaceBeadRhineApp) +
            (variableMaterials.ZipperButtonHook * variableMaterials.NumZipperButtonHook) +
            (variableMaterials.Horsehair * variableMaterials.NumHorsehair) +
            (variableMaterials.Thread * variableMaterials.NumThread) +
            (variableMaterials.Embellishment1 * variableMaterials.NumEmbellishment1) +
            (variableMaterials.Embellishment2 * variableMaterials.NumEmbellishment2) +
            (variableMaterials.Embellishment3 * variableMaterials.NumEmbellishment3) +
            (variableMaterials.HangTag * variableMaterials.NumHangTag) +
            (packaging.GarmentBags + packaging.TagsPinsBoxes)
        )
        // calculate maintenance fees
        const totalMaintenanceFees = (
            (maintenancefees.SewingMachineMaintFee + maintenancefees.ShopMaintUtilFee)
        )
        // Take each result and dispatch to redux for global state
        results.totalMaterials = totalMaterials
        results.totalMaintenanceFees = totalMaintenanceFees
        results.totalLabor = totalLabor
        dispatch(actionSetResults(results))

        // check to ensure correct numbers were dispatched
        console.log("Results", results)
        console.log("total labor costs", results.totalLabor)
        
        
    }



    const laborHours = useSelector (state => state.laborhours)
    const variableMaterials = useSelector (state => state.variablematerials)
    const packaging =  useSelector(state => state.packaging)
    const maintenancefees = useSelector (state => state.maintenancefees)
    const results = useSelector (state => state.results)
    const fees = useSelector (state => state.fees)
    const dispatch = useDispatch()
    const multiplier = 1.9
    const storeProm =  Number(((results.totalLabor + results.totalMaterials) * multiplier) + (results.totalMaintenanceFees) + ((fees.StateTax * (((results.totalLabor + results.totalMaterials) * multiplier) + (results.totalMaintenanceFees))) + (fees.Processing * ((fees.StateTax * ((results.totalLabor + results.totalMaterials) * multiplier) + (results.totalMaintenanceFees)))))).toFixed(2)
    const storeBridal = Number(storeProm * 1.55).toFixed(2)
    const retailProm = Number(storeProm / 2).toFixed(2)
    const retailBridal = Number(storeBridal / 2).toFixed(2)
    

    

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
                        <p className="Labor">Total Labor Costs: $ {results.totalLabor} </p>
                        <p className="Material">Total Material Costs $ {results.totalMaterials} </p>
                        <p className="FeesTotal">Total Fees $ {results.totalMaintenanceFees} </p>
                        <p className="retailProm">Retail Price --- Prom Event $ {retailProm} </p>
                        <p className="retailBridal">Retail Price --- Bridal Event $ {retailBridal} </p>
                        <p className="storeProm">Store Price --- Prom Event: $ {storeProm} </p>
                        <p className="storeBridal">Store Price --- Bridal Event $ {storeBridal} </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home
