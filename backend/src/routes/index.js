const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clientsController');
const carsController = require('../controllers/carsController');
const preOrderController = require('../controllers/preOrderController');
const orderController = require('../controllers/orderController');
const usersController = require('../controllers/usersController');

const reminderController = require('../controllers/reminderController');
const schedulerController = require('../controllers/schedulerController');
const leadsController = require('../controllers/leadsController');
// const searchController = require('../controllers/searchController');
// const webCarsController = require('../controllers/webCarsController');

const uploadsController = require('../controllers/uploadsController');
// const contractController = require('../controllers/contractController');
// const invoiceController = require('../controllers/invoiceController');
// const mailsController = require('../controllers/mailsController');



// middle para proteger las rutas
const  auth  = require('../../src/middlewares/auth');

module.exports = function () {

    // Agrega nuevos clientes via POST
    router.post('/clients',
        clientsController.newClient
    );

    // Obtener todos los clientes
    router.get('/clients',
        clientsController.getClient
    );

    // Muestra un cliente en especifico (ID)
    router.get('/clients/:idClient',
        clientsController.viewClient);

    // Actualizar Cliente
    router.put('/clients/:idClient',
        clientsController.updateClient);

    // Eliminar Cliente
    router.delete('/clients/:idClient',
        clientsController.deleteClient);

    /** COCHES */
    // nuevos coches
    router.post('/cars',
        carsController.uploadCar,
        carsController.newCar
    );

    // Muestra todos los coches
    router.get('/cars',
        carsController.getCar);

    // muestra un coche en especifico por su ID
    router.get('/cars/:idCar',
        carsController.viewCar);

    // Actualizar coches
    router.put('/cars/:idCar',
        carsController.uploadCar,
        carsController.updateCar
    );

    // Eliminar coches
    router.delete('/cars/:idCars',
        carsController.deleteCar
    );

    // Busqueda de coches
    router.post('/cars/search/:query',
        carsController.searchCar);

    /*** PRE-PEDIDO */
    // Agrega nuevos pre-pedidos
    router.post('/preOrder/new/:idUser',
        preOrderController.newPreOrder);

    // mostrar todos los pre-pedidos
    router.get('/preOrder',
        preOrderController.viewAllPreOrder);

    // Mostrar un pre-pedido por su ID
    router.get('/preOrder/:idPreOrder',
        preOrderController.viewPreOrder);

    // Actualizar pre-pedidos
    router.put('/preOrder/:idPreOrder',
        preOrderController.updatePreOrder);

    // Elimina un pre-pedido
    router.delete('/preOrder/:idPreOrder',
        preOrderController.deletePreOrder);

    /*** PEDIDO */
    // Agrega nuevos pedidos
    router.post('/Order/new/:idUser',
        orderController.newOrder);

    // mostrar todos los pedidos
    router.get('/Order',
        orderController.viewAllOrder);

    // Mostrar un pedido por su ID
    router.get('/Order/:idOrder',
        orderController.viewOrder);

    // Actualizar pedidos
    router.put('/Order/:idOrder',
        orderController.updateOrder);

    // Elimina un pedido
    router.delete('/Order/:idOrder',
        orderController.deleteOrder);


    /*** USUARIOS */
    router.post('/register',
        auth,
        usersController.registerUser
    );

    router.post('/login',
        usersController.authenticateUser
    );


    /*** REMINDERS */
    //Agregar un nuevo reminder
    router.post('/reminder/new/:idUser',
        reminderController.newReminder);

    //mostrar todos los reminders
    router.get('/reminder',
        reminderController.viewAllReminder);

    //mostrar reminder por su ID
    router.get('/reminder/:idReminder',
        reminderController.viewReminder);

    //Actualizar reminder
    router.put('/reminder/:idReminder',
        reminderController.uploadReminder,
        reminderController.updateReminder);

    //Eliminar reminder
    router.delete('/reminder/:idReminder',
        reminderController.deleteReminder);


    /*** SCHEDULER */
    //Agregar nuevo scheduler Reminder
    router.post('/scheduler/new/:idUser',
        schedulerController.newScheduler);

    //mostrar todos los scheduler reminders
    router.get('/scheduler',
        schedulerController.viewAllScheduler);

    //mostrar scheduler por su ID
    router.get('/scheduler/:idScheduler',
        schedulerController.viewScheduler);

    //Actualizar scheduler reminder
    router.put('/scheduler/:idScheduler',
        schedulerController.uploadScheduler,
        schedulerController.updateScheduler);

    //Eliminar scheduler
    router.delete('/scheduler/:idScheduler',
        schedulerController.deleteScheduler);


    //*** LEADS */
    //Agregar un nuevo lead
    router.post('/lead/new/:idUser',
        leadsController.newLead);

    //mostrar todos los leads
    router.get('/lead',
        leadsController.viewAllLead);

    //mostrar lead por su ID
    router.get('/lead/:idLead',
        leadsController.viewLead);

    //Actualizar lead
    router.put('/lead/:idLead',
        leadsController.uploadLead,
        leadsController.updatelead);

    //Eliminar lead
    router.delete('/lead/:idLead',
        leadsController.deleteLead);


    //*** WEB CARS */
    //Agregar un nuevo coche de la web
    router.post('/webCar/new/:idUser',
        webCarsController.newWebCar);

    //mostrar todos los coches de la web
    router.get('/webCar',
        webCarsController.viewAllWebCar);

    //mostrar coches de la web por su ID
    router.get('/webCar/:idWebCar',
        webCarsController.viewWebCar);

    //Actualizar coches de la web
    router.put('/webCar/:idWebCar',
        webCarsController.uploadWebCar,
        webCarsController.updateWebCar);

    //Eliminar lead
    router.delete('/webCar/:idWebCar',
        webCarsController.deleteWebCar);

    //*** DOCUMENTOS */
    //Agregar un nuevo documento
    router.post('/upload/new/:idUser',
        uploadsController.uploadDocument,
        uploadsController.updateDocument);

    //mostrar todos los documentos
    router.get('/upload',
        uploadsController.viewAllDocuments);

    //mostrar documento por su ID
    router.get('/upload/:idDocument',
        uploadsController.viewDocument);

    //Actualizar documento
    router.put('/upload/:idDocument',
        uploadsController.uploadThisDocument,
        uploadsController.updateThisDocument);

    //Eliminar document
    router.delete('/upload/:idDocument',
        uploadsController.deleteDocument);

    // Busqueda de Documentos
    router.post('/upload/search/:query',
        uploadsController.searchDocument);



    return router;
}