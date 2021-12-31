import Cors from 'cors'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { Stage } from '../../../interfaces'
import { initMiddleware } from '../../../lib/initMiddleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  })
)

const initializeStages = (): Stage[] => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'Stage.csv')
  )
  return parse(data, {
    columns: true,
    skipEmptyLines: true,
    on_record: (record, { lines }) => {
      return { ID: lines, name: record.name, image: record.image }
    },
  })
}

const stages = initializeStages()

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  try {
    if (!Array.isArray(stages)) {
      throw new Error('Cannot find stage data')
    }

    res.status(200).json(stages)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
