import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Product from '../models/Product';

const models = [Product];

const connection = new Sequelize(databaseConfig);

//  Para cada model irá realizar uma dbConnection
models.forEach((model) => model.init(connection));
