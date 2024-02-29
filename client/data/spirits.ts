interface Cocktail {
  name: string
  ingredients: string
  instructions: string
}

const CocktailData = {
  Vodka: {
    name: 'Vodka',
    ingredients: [
      { name: 'Cosmo' },
      { name: 'Moscow Mule' },
      { name: 'Vodka Tonic' },
      { name: 'Vodka Sour' },
    ],
  },
  Gin: {
    name: 'Gin',
    ingredients: [
      { name: 'Gin and Tonic' },
      { name: 'Flamingo' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    ],
  },
  Whiskey: {
    name: 'Whiskey',
    ingredients: [{
      { name: 'Irish Rose' },
      { name: 'Old Fashioned' },
      { name: 'Queens Cocktail' },
      { name: 'Trinity' },
    }]
  }
}

export default CocktailData

// Africa: {
//   name: 'Africa',
//   image: 'South-Africa.jpg',
//   countries: [
//     { code: 'AO', name: 'Angola' },
//     { code: 'BF', name: 'Burkina Faso' },
//     { code: 'BI', name: 'Burundi' },
//     { code: 'BJ', name: 'Benin' },
//     { code: 'BW', name: 'Botswana' },
