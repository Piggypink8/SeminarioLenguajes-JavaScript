const type = document.getElementById("type")

function validatingType() {
    console.log(type.textContent)
    const fuelConsumption = document.getElementById("fuelConsumption")
    if(type.value == "motocicleta" || type.value == "automóvil" || type.value == "automovil"){
        fuelConsumption.disabled = false
    } else {
        fuelConsumption.disabled = true
    }
}