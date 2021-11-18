import React from 'react'
import '../componentcss/Home.css'

function Home() {
    return (
        <div className="CalcHome">
            <div className="CalcHeader">
                Calc Header
            </div>
            <div className="CalcTitle">
                <p>DRESS PRICING CALCULATOR</p>
                <p>YELLOW BOXES REQUIRE YOUR INPUT FOR CALCULATIONS</p>
            </div>
            <div className="Calculator">
                <div className="CalcColLeft">
                    Left
                </div>
                <div className="CalcColRight">
                    Right
                    <p className="Labor">Total Labor Costs</p>
                    <p className="Material">Total Material Costs</p>
                    <p className="Fees">Fees</p>
                    <p className="WholesaleProm">Wholesale Price --- Prom Event</p>
                    <p className="WholesaleBridal">Wholesale Price --- Bridal Event</p>
                    <p className="RetailProm">Retail Price --- Prom Event</p>
                    <p className="RetailBridal">Retail Price --- Bridal Event</p>
                </div>
            </div>
        </div>
    )
}

export default Home
