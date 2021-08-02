import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import './database';

import './shared/container';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

console.log("********** Server is running on port 3333 **********");
app.listen(3333);