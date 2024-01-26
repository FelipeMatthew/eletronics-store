import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Models
import User from '../models/User';
import Product from '../models/Product';
import ProductPictures from '../models/ProductPicture';


const models = [Product, User, ProductPictures];

const connection = new Sequelize(databaseConfig);

//  Para cada model irá realizar uma dbConnection
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
