console.log('Inicio App');
require('dotenv').config()

const regionWS = require('./src/services/regionWS');
const Region = require('./src/database/Region');
const provinciaWS = require('./src/services/provinciaWS');
const Provincia = require('./src/database/Provincia');
const comunaWS = require('./src/services/comunaWS');
const Comuna = require('./src/database/Comuna');






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


//************************* Region */
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
//*************************************** Region */

//Provincia ***************************** */
router.route('/provincia').get((request, response) => {
    provinciaWS.getProvincia().then(result => {
        response.json(result);
    });
});
/*Ruta obtencion provincia por Id*/
router.route('/provincia/:idProvincia').get((request, response) => {
    provinciaWS.getProvinciaId(request.params.idProvincia).then(result => {
        response.json(result);
    });

});
/*Ruta Insertar Provincia*/
router.route('/provincia/nuevo').post((request, response) => {
    let provincia = {...request.body}
    provinciaWS.newProvincia(provincia).then(result => {
        response.json('Registro insertado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});
/*Ruta actualizar Provincia*/
router.route('/provincia').put((request, response) => {
    let provincia = {...request.body}
    provinciaWS.upProvincia(provincia).then(result => {
        response.json('Registro actualizado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }

    );
});   
/*Ruta eliminar provincia*/
router.route('/provincia').delete((request, response) => {
    let provincia = {...request.body}
    provinciaWS.delProvincia(provincia).then(result => {
        response.json('Registro eliminado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});
//*************************************** Provincia */


//Comuna ***************************** */
router.route('/comuna').get((request, response) => {
    comunaWS.getComuna().then(result => {
        response.json(result);
    });
});
/*Ruta obtencion Comuna por Id*/
router.route('/comuna/:idComuna').get((request, response) => {
    comunaWS.getComunaId(request.params.idComuna).then(result => {
        response.json(result);
    });

});
/*Ruta Insertar Comuna*/
router.route('/comuna/nuevo').post((request, response) => {
    let comuna = {...request.body}
    comunaWS.newComuna(comuna).then(result => {
        response.json('Registro insertado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});
/*Ruta actualizar Comuna*/
router.route('/comuna').put((request, response) => {
    let comuna = {...request.body}
    comunaWS.upComuna(comuna).then(result => {
        response.json('Registro actualizado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }

    );
});   
/*Ruta eliminar Comuna*/
router.route('/comuna').delete((request, response) => {
    let comuna = {...request.body}
    comunaWS.delComuna(comuna).then(result => {
        response.json('Registro eliminado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});
//*************************************** Comuna */

//Comuna ***************************** */
router.route('/comuna').get((request, response) => {
    comunaWS.getComuna().then(result => {
        response.json(result);
    });
});
/*Ruta obtencion Comuna por Id*/
router.route('/comuna/:idComuna').get((request, response) => {
    comunaWS.getComunaId(request.params.idComuna).then(result => {
        response.json(result);
    });

});
/*Ruta Insertar Comuna*/
router.route('/comuna/nuevo').post((request, response) => {
    let comuna = {...request.body}
    comunaWS.newComuna(comuna).then(result => {
        response.json('Registro insertado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});
/*Ruta actualizar Comuna*/
router.route('/comuna').put((request, response) => {
    let comuna = {...request.body}
    comunaWS.upComuna(comuna).then(result => {
        response.json('Registro actualizado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }

    );
});   
/*Ruta eliminar Comuna*/
router.route('/comuna').delete((request, response) => {
    let comuna = {...request.body}
    comunaWS.delComuna(comuna).then(result => {
        response.json('Registro eliminado exitosamente');
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    }
    );
});
//*************************************** Comuna */



var portcnx = process.env.PORT || 5000;
app.listen(portcnx);
console.log('Fin App')

