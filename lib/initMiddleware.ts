import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'

export const initMiddleware = (middleware: ReturnType<typeof Cors>) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      middleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result)
        }

        return resolve(result)
      })
    })
}
