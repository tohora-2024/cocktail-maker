interface Cocktail {
  name: string
  ingredients: string
  instructions: string
}

interface SpiritProps {
  spiritName: string
}

const data = {
  Vodka: {
    id: 'Vodka',
    cocktails: [
      { name: 'Cosmo' },
      { name: 'Moscow Mule' },
      { name: 'Vodka Tonic' },
      { name: 'Vodka Sour' },
    ],
  },
  Gin: {
    id: 'Gin',
    cocktails: [
      { name: 'Gin and Tonic' },
      { name: 'Flamingo' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Whiskey: {
    id: 'Whiskey',
    cocktails: [
      { name: 'Irish Rose' },
      { name: 'Old Fashioned' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Brandy: {
    id: 'Brandy',
    cocktails: [
      { name: 'Irish Rose' },
      { name: 'Old Fashioned' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Rum: {
    id: 'Rum',
    cocktails: [
      { name: 'Rum 1' },
      { name: 'Rum 2' },
      { name: 'Rum 3' },
      { name: 'Rum 4' },
    ],
  },
}

export default data
