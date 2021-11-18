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
                </div>
            </div>
        </div>
    )
}

export default Home
