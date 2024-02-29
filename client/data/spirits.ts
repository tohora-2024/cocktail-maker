interface Cocktail {
  name: string
  ingredients: string
  instructions: string
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
      {
        name: 'Cosmo',
        ingredients: 'Vodka, lime juice, triple sec, cranberry juice',
        instructions:
          'Shake all the ingredients together with ice. Strain into a cocktail glass',
      },
      {
        name: 'Moscow Mule',
        ingredients: 'Vodka, ginger beer, fresh lime',
        instructions: 'Stir',
      },
      {
        name: 'Vodka Tonic',
        ingredients: 'vodka, tonic',
        instructions: 'Mix it yall',
      },
      {
        name: 'Vodka Sour',
        ingredients:
          'vodka, lemon juice, sugar syrup, bitters, egg white or foamer',
        instructions:
          'Add them all to your shaker and shake, shake, shake. Serve with ice.',
      },
    ],
  },
  Gin: {
    spiritName: 'Gin',
    cocktails: [
      {
        name: 'Gin and Tonic',
        ingredients: 'Gin and tonic - WOW',
        instructions: 'pick a gin brand and some tonic bruh',
      },
      {
        name: 'Flamingo',
        ingredients: 'Gin, apricot brandy, lemon juice, grenadine',
        instructions:
          'Shake all the ingredients together with ice. Strain into a cocktail glass',
      },
      {
        name: 'Queens Cocktail',
        ingredients: 'Gin, pineapple juice, red vermouth, dry vermouth',
        instructions:
          'Shake all the ingredients together with ice. Strain into a cocktail glass',
      },
      {
        name: 'Trinity',
        ingredients: 'Gin, red vermouth, dry vermouth',
        instructions:
          'Shake all the ingredients together with ice. Strain into a cocktail glass',
      },
    ],
  },
  Whiskey: {
    spiritName: 'Whiskey',
    cocktails: [
      { name: 'Irish Rose', ingredients: 'whiskey', instructions: 'mix' },
      {
        name: 'Old Fashioned',
        ingredients: 'Whiskey',
        instructions: 'make it taste gross and you got an old fashioned',
      },
      {
        name: 'whiskey 3',
        ingredients: 'whiskey',
        instructions: 'dont know yet',
      },
      {
        name: 'whiskey number 4',
        ingredients: 'whiskey',
        instructions: 'dont know yet',
      },
    ],
  },
  Brandy: {
    spiritName: 'Brandy',
    cocktails: [
      { name: 'brandy 1', ingredients: 'brandy', instructions: 'mix' },
      { name: 'brandy 2', ingredients: 'brandy', instructions: 'mix' },
      { name: 'brandy 3', ingredients: 'brandy', instructions: 'mix' },
      { name: 'brandy 4', ingredients: 'brandy', instructions: 'mix' },
    ],
  },
  Rum: {
    spiritName: 'Rum',
    cocktails: [
      { name: 'Rum 1', ingredients: 'brandy', instructions: 'mix' },
      { name: 'Rum 2', ingredients: 'brandy', instructions: 'mix' },
      { name: 'Rum 3', ingredients: 'brandy', instructions: 'mix' },
      { name: 'Rum 4', ingredients: 'brandy', instructions: 'mix' },
    ],
  },
}

export default data
