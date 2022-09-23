/*
 * @Author: zhang yu meng
 * @Date: 2022-08-26 09:05:38
 * @LastEditors: dld web2018.com@gmail.con
 * @LastEditTime: 2022-09-22 17:18:46
 * @FilePath: \ipfs-table\src\index.js
 * @Description:
 *
 * Copyright (c) 2022 by dld web2018.com@gmail.con, All Rights Reserved.
 */
// ESM
import Fastify from "fastify"
import cors from "@fastify/cors"
const fastify = Fastify({
  logger: true
})
await fastify.register(cors, {
  // put your options here
  origin: true
})
fastify.get("/", async (request, reply) => {
  reply.type("application/json").code(200)
  return { hello: "world" }
})
fastify.post("/", async (request, reply) => {
  reply.type("application/json").code(200)
  return { hello: request.body.name }
})
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})
