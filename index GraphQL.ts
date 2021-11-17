import express from "express";
import cors form "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db";

dotenv.config();

const server = new ApolloServer({
    typeDefs: "",
    resolvers: "",
});

const app = express();

app.use(express.json();

app.use(cors());

app.listen({port: process.env.PORT || 4000 }, async ()=> {
    await conectarBD();
    await server.start();

    server.applyMiddleware({app});

    console.log("Servidor Listo");
});