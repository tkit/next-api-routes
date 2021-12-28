export type User = {
  id: number
  name: string
}

export type Special = {
  ID: number
  name: string
  imageA: `/images/special/${string}.png`
  imageB: `/images/special/${string}.png`
}

export type SubWeapon = {
  ID: number
  name: string
  imageA: `/images/sub/${string}.png`
  imageB: `/images/sub/${string}.png`
}

export type Weapon = {
  ID: number
  name: string
  image: `/images/weapon/${string}.png`
  thumbnail: `/images/weapon/${string}.png`
  special: `<Special>{${number}}`
  sub: `<SubWeapon>{${number}}`
}

export type Stage = {
  ID: number
  name: string
  image: `/images/stage/${string}.png`
}

export type Skill = {
  ID: number
  name: string
  image: `/images/skill/${string}.png`
}
