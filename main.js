const lugares = {
  'vina-del-mar': [-33.014545, -71.549706],
  'valparaiso': [-33.048077, -71.612586],
  'santiago': [-33.452412, -70.668861],
  'la-dehesa': [-33.356994, -70.519606],
  'quilpue': [-33.049140, -71.441511],
  'llay-llay': [-32.840460, -70.956417]
}

let origen = document.querySelector('form')[0].value
let destino = document.querySelector('form')[1].value
const vehiculo = document.querySelector('form')[2].value

const distancia = async(origen, destino) => {
  try{
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origen[0]},${origen[1]}&destinations=${destino[0]},${destino[1]}&key=AIzaSyAlDSRLGoUqLzoFZQlR7wvyRoNdsufoQls`

    const resp = await fetch( URL )

    if( !resp.ok ) throw `No se pudo realizar la petición`
    const { rows } =  await resp.json()
    const distance = rows[0].elements[0].distance
    return distance.text 
  }
  catch(err){
    throw err
  }
}

const handleChange = () => {
  let origen = document.querySelector('form')[0].value
  let destino = document.querySelector('form')[1].value
  let vehiculo = document.querySelector('form')[2].value
  console.log( `Origen: ${lugares[origen]}` )
  console.log( `Destino: ${lugares[destino]}` )
  if(vehiculo === 'toyota-prius'){
    distancia(lugares[origen], lugares[destino])
      .then( resp => {
        document.querySelector('#distancia').innerText = resp
        document.querySelector('#consumo').innerText = `Toyota - ${(parseInt(resp)/20.8).toFixed(2)} litros`
      }) 
    }
    else if(vehiculo === 'fiat-argo'){
      distancia(lugares[origen], lugares[destino])
      .then( resp => {
        document.querySelector('#distancia').innerText = resp
        document.querySelector('#consumo').innerText = `Fiat - ${(parseInt(resp)/19.2).toFixed(2)} litros`
      }) 
    }
    else if(vehiculo === 'susuki-alto'){
      distancia(lugares[origen], lugares[destino])
      .then( resp => {
        document.querySelector('#distancia').innerText = resp
        document.querySelector('#consumo').innerText = `Susuki - ${(parseInt(resp)/22.7).toFixed(2)} litros`
      }) 
    }  
    else if(vehiculo === 'nissan-juke'){
      distancia(lugares[origen], lugares[destino])
      .then( resp => {
        document.querySelector('#distancia').innerText = resp
        document.querySelector('#consumo').innerText = `Nissan - ${(parseInt(resp)/20).toFixed(2)} litros`
      }) 
    }  
  }
