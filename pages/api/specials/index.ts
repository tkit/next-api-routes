import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { initMiddleware } from '../../../lib/initMiddleware'
import { initializeSpecials } from '../../../utils/data'

const cors = initMiddleware(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  Cors({
    methods: ['GET'],
  })
)

const specials = initializeSpecials()

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  try {
    if (!Array.isArray(specials)) {
      throw new Error('Cannot find special data')
    }

    res.status(200).json(specials)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
