import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { initMiddleware } from '../../../lib/initMiddleware'
import { initializeSubWeapons } from '../../../utils/data'

const cors = initMiddleware(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  Cors({
    methods: ['GET'],
  })
)

const subWeapons = initializeSubWeapons()

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  try {
    if (!Array.isArray(subWeapons)) {
      throw new Error('Cannot find sub weapon data')
    }

    res.status(200).json(subWeapons)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
