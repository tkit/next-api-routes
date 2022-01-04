import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { Special, SubWeapon, Weapon, WeaponDetail } from '../../../interfaces'
import { initMiddleware } from '../../../lib/initMiddleware'
import {
  initializeSpecials,
  initializeSubWeapons,
  initializeWeapons,
} from '../../../utils/data'

const cors = initMiddleware(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  Cors({
    methods: ['GET'],
  })
)

const weapons: Weapon[] = initializeWeapons()
const specials: Special[] = initializeSpecials()
const subweapons: SubWeapon[] = initializeSubWeapons()

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)

  const getWeaponDetails = (): WeaponDetail[] => {
    return weapons.map((record) => {
      const specialId = parseInt(
        record.special.match(/\<Special\>{(\d+)}/)[1],
        10
      )
      const subId = parseInt(record.sub.match(/\<SubWeapon\>{(\d+)}/)[1], 10)

      const wd: WeaponDetail = {
        ...record,
        special: specials[specialId],
        sub: subweapons[subId],
      }

      return wd
    })
  }

  const wd: WeaponDetail[] = getWeaponDetails()

  try {
    res.status(200).json(wd)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }
}

export default handler
