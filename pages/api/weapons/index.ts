import { NextApiRequest, NextApiResponse } from 'next'
import { Weapon } from '../../../interfaces'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'Weapon.csv')
  )
  const stages: Weapon[] = parse(data, { columns: true, skipEmptyLines: true })

  try {
    if (!Array.isArray(stages)) {
      throw new Error('Cannot find weapon data')
    }

    res.status(200).json(stages)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
