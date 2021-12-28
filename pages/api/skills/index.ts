import { NextApiRequest, NextApiResponse } from 'next'
import { Skill } from '../../../interfaces'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'Skill.csv')
  )
  const skills: Skill[] = parse(data, { columns: true, skipEmptyLines: true })

  try {
    if (!Array.isArray(skills)) {
      throw new Error('Cannot find skill data')
    }

    res.status(200).json(skills)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
