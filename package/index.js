


const  addition = (a , c) => {
    return (a + c)
}


const  subtraction = (a , c) => {
    return (a - c)
}

const multiplication = (a  , c) =>{

    return (a * c)
}

const division = (a , c) =>{
    return ( a / c)
}

const power = (a , c) =>{
    return (a ** c)

}

 const obj =  {
    add : addition,
    subtrac : subtraction,
    multi: multiplication,
    divison: division,
    pow: power

}

module.exports = obj