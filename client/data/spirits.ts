interface Cocktail {
  name: string
  ingredients: string
  instructions: string
}

const SpiritsData = {
  Vodka: {
    name: 'Vodka',
    cocktails: [
      { name: 'Cosmo' },
      { name: 'Moscow Mule' },
      { name: 'Vodka Tonic' },
      { name: 'Vodka Sour' },
    ],
  },
  Gin: {
    name: 'Gin',
    cocktails: [
      { name: 'Gin and Tonic' },
      { name: 'Flamingo' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Whiskey: {
    name: 'Whiskey',
    cocktails: [
      { name: 'Irish Rose' },
      { name: 'Old Fashioned' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Brandy: {
    name: 'Brandy',
    cocktails: [
      { name: 'Irish Rose' },
      { name: 'Old Fashioned' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Rum: {
    name: 'Rum',
    cocktails: [
      { name: 'Rum 1' },
      { name: 'Rum 2' },
      { name: 'Rum 3' },
      { name: 'Rum 4' },
    ],
  },
}

export default SpiritsData
