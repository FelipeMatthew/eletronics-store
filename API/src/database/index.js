import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Models
import User from '../models/User';
import Product from '../models/Product';
import ProductPicture from '../models/ProductPicture';
import UsersPicture from '../models/UsersPicture';


const models = [Product, User, ProductPicture, UsersPicture];

const connection = new Sequelize(databaseConfig);

//  Para cada model irá realizar uma dbConnection
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
