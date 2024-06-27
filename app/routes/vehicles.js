import express from 'express'
import vehiclesData from '../../data/vehicles.json' assert { type: 'json'}

const router = express.Router();

// Obtiene las distancias de todos los vehiculos
router.get('/distance', (req, res) => {
    let vehicles = []
    vehiclesData.forEach(vehicle => {
        let newVehicle  = { type: vehicle.type, 
                    distance: vehicle.distance 
                }
        vehicles.push(newVehicle)
    })
    res.send(vehicles)
})

// Funcion para crear y retornar un nuevo elemento 
function createElem(vehicle) {
    let elem = { 
        type: vehicle.type,
        totalDistance: vehicle.distance,
        averageDistance: 0,
        count: 1
        }
    return elem
}

// Funcion para actualizar la distancia de un vehiculo si existe o crearlo si no existe
function typeExists(distances,vehicle){
    let existe = false
    let i = 0
    while((i < distances.length) & (!existe)){
        if ((distances[i].type == vehicle.type)) {
            distances[i].totalDistance += vehicle.distance
            distances[i].count++
            existe = true
        }
        i++
    }
    if(!existe){
        distances.push(createElem(vehicle))
    }
}

// Obtiene los promedios de cada vehiculo existente
router.get('/distance/average', (req, res) => {
    let distances = []
    vehiclesData.forEach( vehicle => {
        if(distances.length > 0){ 
            typeExists(distances,vehicle)
        } else { 
            distances.push(createElem(vehicle))
        }
    })
    distances.forEach(vehicle => {
        vehicle.averageDistance = vehicle.totalDistance / vehicle.count;
    })
    res.send(distances)
})


//  Obtiene el vehiculo con la distancia mas grande
router.get('/distance/max', (req, res) => {
    let max = -1;
    let vehicleMax;
    vehiclesData.forEach(vehicle => {
        if(vehicle.distance > max){
            max = vehicle.distance;
            vehicleMax = vehicle;
        }
    })
    res.send(vehicleMax);
})

// Obtiene el vehiculo con mayor consumo de nafta
// Consultar -> ¿Está bien preguntar por el tipo de objeto?
router.get('/consumo/max', (req, res) => {
    let max = -1;
    let vehicleMax;
    vehiclesData.forEach(vehicle => {
        if(vehicle.fuelConsumption){
            let amount = vehicle.distance * vehicle.fuelConsumption;
            if(amount > max){
                max = amount;
                vehicleMax = vehicle;
            }
        }
    })
    res.send(vehicleMax);
})


router.get('/', (req, res) => {
    res.render('insertVehicle')
})

// Agrega un vehiculo nuevo al json
// Consultar -> ¿Porqué no agrega el vehiculo nuevo? (Cuando lo agrega se ve null, object, object)
router.post('/', (req, res) => {
    const {type, distance} = req.body
    let newVehicle = {
        "id": vehiclesData.length++,
        type,
        distance
    }
    if(req.type != "bicicleta"){ 
        newVehicle += {"fuelConsumption":  req.fuelConsumption}
    }

    vehiclesData.push(newVehicle)
    res.send(vehiclesData)
})

export default router