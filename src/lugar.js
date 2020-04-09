const axios = require('axios');

const getLugarLatLong = async (ciudad) =>{

const encodeUrl = encodeURI(ciudad);

    console.log(encodeUrl);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': 'b421074f72mshb5e9e75199b256ep1264abjsn9dc43e882da2'}
    });

    const resp = await instance.get();

    if(resp.data.Results[0].lenght===0)
    {
        throw new Error(`no hay resultados para ${direccion}`);
    }
    
    const data = resp.data.Results[0];

    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;
  
    
/*    instance.get()
    .then((response)=> {
        // handle success
        console.log('succes',response.data.Results[0]);
    })
    .catch((error)=> {
        // handle error
        console.log('err',error);
    });*/

    return {direccion,latitud,longitud};
}

module.exports =
{
    getLugarLatLong
};