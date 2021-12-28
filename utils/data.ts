import { Weapon, SubWeapon, Special, Stage, Skill } from '../interfaces'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

export const stages: Stage[] = parse(fs.readFileSync('../data/Stage.csv'), {
  columns: true,
  skipEmptyLines: true,
})
export const weapons: Weapon[] = parse(fs.readFileSync('../data/Weapon.csv'), {
  columns: true,
})
export const specials: Special[] = parse(
  fs.readFileSync('../data/Special.csv'),
  {
    columns: true,
  }
)
export const subs: SubWeapon[] = parse(fs.readFileSync('../data/Sub.csv'), {
  columns: true,
})
export const skills: Skill[] = parse(fs.readFileSync('../data/Skill.csv'), {
  columns: true,
})
