const db = require('./config/database')

let Certificate = require('./models/certificate')
let Company = require('./models/company')
let Position = require('./models/position')
let Worker = require('./models/worker')
let WorkerCertificate = require('./models/workerCertificate')

Certificate.belongsToMany(Worker, { through: WorkerCertificate });
Worker.belongsToMany(Certificate, { through: WorkerCertificate});

Worker.hasOne(Company, { through: Worker });
Worker.hasOne(Position, { through: Worker });

// Certificate.sync({force: true});
// Company.sync({force: true});
// Position.sync({force: true});
// Worker.sync({force: true});
// WorkerCertificate.sync({force: true});

db.sync({ force: true });


