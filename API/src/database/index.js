import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Models
import User from '../models/User';
import Product from '../models/Product';

const models = [Product, User];

const connection = new Sequelize(databaseConfig);

//  Para cada model irá realizar uma dbConnection
models.forEach((model) => model.init(connection));
