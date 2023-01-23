import  { FastifyInstance } from "fastify"
import { z } from "zod"
import { calculateCompositeTax } from '../services/calculateService'

export async function calculatorRoutes(fastify: FastifyInstance) {
  fastify.post('/calculator', async (request, reply) =>{
    const createCalculatorBody= z.object({
      initialInvestment: z.number({
        required_error: "Initial investment value is required",
        invalid_type_error: "Initial Investment value must be a number",
      }),
      monthlyContribution: z.number(),
      profitability: z.number(),
      period: z.number()
    })


    
    const calculatorData = createCalculatorBody.parse(request.body)
    const test = {
      initialValue: calculatorData.initialInvestment,
      contribution: calculatorData.monthlyContribution,
      profitability: calculatorData.profitability,
      years: calculatorData.period
    }

    const tax = calculateCompositeTax(test)

    return reply.status(201).send(tax)
  })

}
