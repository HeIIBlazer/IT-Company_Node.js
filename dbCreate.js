const db = require('./config/database')

let Certificate = require('./models/certificate');
let Company = require('./models/company');
let Position = require('./models/position');
let Worker = require('./models/worker');
let WorkerCertificate = require('./models/workerCertificate');

//Create connection between Worker and Certificate
// Worker.belongsToMany(Certificate, { through: WorkerCertificate })
// Certificate.belongsToMany(Worker, { through: WorkerCertificate })

//Create connection between Worker and Company 
Worker.hasOne(Company, { foreignKey: 'company_id', sourceKey: 'companyID' });

//Create connection between Worker and Position
Worker.hasOne(Position, { foreignKey: 'position_id', sourceKey: 'positionID' });

// Certificate.sync({force: true});
// Company.sync({force: true});
// Position.sync({force: true});
// Worker.sync({force: true});
// WorkerCertificate.sync({force: true});


db.sync({ alter: true });


