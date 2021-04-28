const comprarCasco = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Comprar casco")
  }, 1000)
})
const comprarGuantes = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Comprar guantes")
  }, 2000)
})
const irPaseo = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Paseo en bici")
  }, 8000)
})

const pasearEnBici = () =>{
  comprarCasco
    .then(infoCasco=>{
      console.log(infoCasco)
      return comprarGuantes;
    })
    .then(infoGuantes=>{
      console.log(infoGuantes)
      return irPaseo;
    })
    .then(infoPaseo=>{
      console.log(infoPaseo)
      return infoPaseo;
    })
    .catch(error=>{
      console.log(error)
    })
    .finally(()=> console.log("Proceso finalizado"))
  }
  pasearEnBici();
