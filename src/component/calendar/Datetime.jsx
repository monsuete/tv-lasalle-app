import React from 'react'


// import { zonedTimeToUtc } from 'date-fns-tz';

const datetime = () => {
    
    const showdate = new Date()

    const month=showdate.getMonth() - 1
    


    var meses = ["janeiro", "Fefereiro", "Março", "Abril", "Junho", "Julho", "Agosto", "Setembro", 
        "Outubro", "Novembro", "Dezembro"]

    const dt = meses[month]
    const day = showdate.getDate()
    const yar = showdate.getFullYear()
    
    // const displaydate = showdate.getDate()
    
    // const dt = showdate.toString()
    // if (dt < 10) dt = '0' + showdate.toString()
    // // const displayhours = showdate.getHours() + ':' + showdate.getMinutes()
    return (

        <div className="cont" >
            <div className="teste">
            <h1 align="center" className="day">{day}</h1>
            <h4 align="center" className="day-yar" >{dt} de {yar}</h4>
            
            
            </div>
            

        </div>




    )
}

export default datetime