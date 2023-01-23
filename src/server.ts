import Fastify from 'fastify'
import cors from '@fastify/cors'

import { calculatorRoutes } from './routes/calculator'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(calculatorRoutes)

  await fastify.listen({ port: 3333})
}

bootstrap()