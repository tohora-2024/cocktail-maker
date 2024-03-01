export interface Cocktail {
  name: string
  ingredients: string
  instructions: string
}

export interface SpiritsData {
  [key: string]: Cocktail[]
}
