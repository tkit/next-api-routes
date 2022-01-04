import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { initMiddleware } from '../../../lib/initMiddleware'
import { initializeStages } from '../../../utils/data'

const cors = initMiddleware(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  Cors({
    methods: ['GET'],
  })
)

const stages = initializeStages()

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  try {
    if (!Array.isArray(stages)) {
      throw new Error('Cannot find stage data')
    }

    res.status(200).json(stages)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
