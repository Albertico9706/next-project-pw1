import { PrismaClient } from '@prisma/client'
/* import {PrismaPg} from "@prisma/adapter-pg"
import {Pool} from "pg" */

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }
//remove the driver adapter temporally for debug problems
/* const connectionString= `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter }) */
export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma