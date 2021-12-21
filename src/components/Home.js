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

    const laborHours = useSelector (state => state.laborhours)
    const variableMaterials = useSelector (state => state.variablematerials)
    const packaging =  useSelector(state => state.packaging)
    const maintenancefees = useSelector (state => state.maintenancefees)
    const results = useSelector (state => state.results)
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        
        const totalLabor = (
            (laborHours.SewingHrs * laborHours.SewingPriceHr ) + 
            (laborHours.PatternHrs * laborHours.PatternPriceHr) + 
            (laborHours.CuttingHrs * laborHours.CuttingPriceHr) + 
            (laborHours.AppliqueHrs * laborHours.AppliquePriceHr)
        )

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

        const totalMaintenanceFees = (
            (maintenancefees.SewingMachineMaintFee + maintenancefees.ShopMaintUtilFee)
        )
        results.totalMaterials = totalMaterials
        results.totalMaintenanceFees = totalMaintenanceFees
        results.totalLabor = totalLabor

        dispatch(actionSetResults(results))
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
                        <p className="Material">Total Material Costs </p>
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
