import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data"

export default function App() {
    const cardInfo = Data.map( data => {
        return (
            <Card
                key={data.id}
                {...data}
            />
        )
    })
    return(
        <div className="container">
            <Navbar />
            <div className="card-container">
                {cardInfo}
            </div>
        </div>
    )
}