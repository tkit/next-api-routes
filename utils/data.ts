/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import { Special, Stage, SubWeapon, Weapon } from '../interfaces'

export const initializeStages = (): Stage[] => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'Stage.csv')
  )

  return parse(data, {
    columns: true,
    skipEmptyLines: true,
    on_record: (record: Stage[], { lines }) => {
      return { ...record, ID: lines - 1 }
    },
  }) as Stage[]
}

export const initializeWeapons = (): Weapon[] => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'Weapon.csv')
  )

  return parse(data, {
    columns: true,
    skipEmptyLines: true,
    on_record: (record: Weapon[], { lines }) => {
      return { ...record, ID: lines - 1 }
    },
  }) as Weapon[]
}

export const initializeSpecials = (): Special[] => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'Special.csv')
  )

  return parse(data, {
    columns: true,
    skipEmptyLines: true,
    on_record: (record: Special[], { lines }) => {
      return { ...record, ID: lines - 1 }
    },
  }) as Special[]
}

export const initializeSubWeapons = (): SubWeapon[] => {
  const data: Buffer = fs.readFileSync(
    path.join(process.cwd(), 'data', 'SubWeapon.csv')
  )

  return parse(data, {
    columns: true,
    skipEmptyLines: true,
    on_record: (record: SubWeapon[], { lines }) => {
      return { ...record, ID: lines }
    },
  }) as SubWeapon[]
}
