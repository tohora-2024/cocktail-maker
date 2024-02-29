interface Cocktail {
  name: string
}

interface Spirit {
  spiritName: string
  cocktails: Cocktail[]
}

export type SpiritData = Record<string, Spirit>

const data: SpiritData = {
  Vodka: {
    spiritName: 'Vodka',
    cocktails: [
      { name: 'Cosmo' },
      { name: 'Moscow Mule' },
      { name: 'Vodka Tonic' },
      { name: 'Vodka Sour' },
    ],
  },
  Gin: {
    spiritName: 'Gin',
    cocktails: [
      { name: 'Gin and Tonic' },
      { name: 'Flamingo' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Whiskey: {
    spiritName: 'Whiskey',
    cocktails: [
      { name: 'Irish Rose' },
      { name: 'Old Fashioned' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Brandy: {
    spiritName: 'Brandy',
    cocktails: [
      { name: 'Irish Rose' },
      { name: 'Old Fashioned' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Rum: {
    spiritName: 'Rum',
    cocktails: [
      { name: 'Rum 1' },
      { name: 'Rum 2' },
      { name: 'Rum 3' },
      { name: 'Rum 4' },
    ],
  },
}

export default data
