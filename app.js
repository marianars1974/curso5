
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'direccion',
        demand:true
    }
}).argv;
const lugar = require('./src/lugar');
const clima = require('./src/clima');

/*lugar.getLugarLatLong(argv.direccion).then(
    console.log).catch(console.log);*/


//clima.getClima('40.750000','-74.00000').then(console.log);

//console.log(argv.direccion);

const getInfo = async (direccion) =>
{
    try {
        const coord = await lugar.getLugarLatLong(direccion);
    
        const temp = await clima.getClima(coord.latitud,coord.longitud);
        return `el clima de ${direccion} es de ${temp}`;        
    } catch (error) {
        return `No se encontro el clima de ${direccion}`;        
    }
    


}

getInfo(argv.direccion).then(console.log).catch(console.log);

