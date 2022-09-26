console.log('Inicio App');
require('dotenv').config()

const regionWS = require('./src/services/regionWS');
const Region = require('./src/database/Region');
const provinciaWS = require('./src/services/provinciaWS');
const Provincia = require('./src/database/Provincia');


var express = require('express');
var bodyP = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');

var app = express();
var router = express.Router();

app.use(bodyP.urlencoded({ extended: true }));
app.use(bodyP.json());
app.use(cors());
app.use('/API', router);

/*Ruta obtencion Regiones*/
router.route('/region').get((request, response) => {
    regionWS.getRegion().then(result => {
        response.json(result);
    });
});

/*Ruta obtencion Regiones por Id*/
router.route('/region/:idRegion').get((request, response) => {
    regionWS.getRegionId(request.params.idRegion).then(result => {
        response.json(result);
    });
});

/*Ruta Insertar region*/
router.route('/region/nuevo').post((request, response) => {
    let region = {...request.body}
    regionWS.newRegion(region).then(result => {
        response.json('Registro insertado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});

/*Ruta actualizar region*/
router.route('/region').put((request, response) => {
    let region = {...request.body}
    regionWS.upRegion(region).then(result => {
        response.json('Registro actualizado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }

    );
});


/*Ruta eliminar region*/
router.route('/region').delete((request, response) => {
    let region = {...request.body}
    regionWS.delRegion(region).then(result => {
        response.json('Registro eliminado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});

router.route('/provincia').get((request, response) => {
    provinciaWS.getProvincia().then(result => {
        response.json(result);
    });
});


var portcnx = process.env.PORT || 5000;
app.listen(portcnx);
console.log('Fin App')

