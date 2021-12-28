import { NextApiRequest, NextApiResponse } from 'next'
import { SubWeapon } from '../../../interfaces'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'SubWeapon.csv')
  )
  const subweapons: SubWeapon[] = parse(data, {
    columns: true,
    skipEmptyLines: true,
  })

  try {
    if (!Array.isArray(subweapons)) {
      throw new Error('Cannot find subweapon data')
    }

    res.status(200).json(subweapons)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
