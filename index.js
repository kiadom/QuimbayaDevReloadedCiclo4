import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { conectarBD } from './db/db.js';

/** Permite usar variables de entorno, se definen en el archivo .env */
dotenv.config();

const server = new ApolloServer({
    typeDefs: tipos,
    resolvers: resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({port: process.env.PORT || 4000}, async () => {
    await conectarBD();
    await server.start();

    server.applyMiddleware({ app });

    console.log('Servidor Listo');
})