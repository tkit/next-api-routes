import { NextApiRequest, NextApiResponse } from 'next'
import { Special } from '../../../interfaces'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'Special.csv')
  )
  const specials: Special[] = parse(data, {
    columns: true,
    skipEmptyLines: true,
  })

  try {
    if (!Array.isArray(specials)) {
      throw new Error('Cannot find special data')
    }

    res.status(200).json(specials)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
