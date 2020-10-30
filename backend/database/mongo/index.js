const carModel = require('./models/car');
const clientsModel = require('./models/clients');
const carClientsModel = require('./models/car-client');
const leadsModel = require('./models/leads');
const preOrderModel = require('./models/preOrder');
const uploadsModel = require('./models/uploads');
const usersModel = require('./models/users');
const crmModel = require('./models/crm');
const schedulerModel = require('./models/scheduler');

module.exports = { carModel, clientsModel,schedulerModel, carClientsModel, leadsModel, preOrderModel, uploadsModel, usersModel, crmModel};