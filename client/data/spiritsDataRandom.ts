export interface Cocktail {
  name: string
  ingredients: string
  instructions: string
}

export const vodka: Cocktail[] = [
  {
    name: 'White Russian',
    ingredients: 'Vodka, coffee liqueur, cream',
    instructions:
      'Pour vodka and coffee liqueur into an old fashioned glass filled with ice. Float fresh cream on top and stir slowly.',
  },
  {
    name: 'Vodka Martini',
    ingredients: 'Vodka, dry vermouth, olive or lemon twist for garnish',
    instructions:
      'Stir vodka and vermouth with ice, strain into a chilled martini glass, garnish with an olive or lemon twist.',
  },
]

export const gin: Cocktail[] = [
  {
    name: 'Negroni',
    ingredients: 'Gin, sweet vermouth, Campari, orange twist for garnish',
    instructions:
      'Stir gin, vermouth, and Campari with ice, strain into a rocks glass filled with ice, garnish with an orange twist.',
  },
  {
    name: 'Gimlet',
    ingredients: 'Gin, lime juice, simple syrup',
    instructions:
      'Shake gin, lime juice, and simple syrup with ice, strain into a chilled cocktail glass.',
  },
]

export const whiskey: Cocktail[] = [
  {
    name: 'Manhattan',
    ingredients: 'Whiskey, sweet vermouth, bitters, cherry for garnish',
    instructions:
      'Stir whiskey, vermouth, and bitters with ice, strain into a chilled cocktail glass, garnish with a cherry.',
  },
  {
    name: 'Whiskey Sour',
    ingredients:
      'Whiskey, lemon juice, simple syrup, cherry and orange slice for garnish',
    instructions:
      'Shake whiskey, lemon juice, and simple syrup with ice, strain into a rocks glass filled with ice, garnish with a cherry and orange slice.',
  },
]

export const brandy: Cocktail[] = [
  {
    name: 'Sidecar',
    ingredients: 'Brandy, orange liqueur, lemon juice, sugar for rimming',
    instructions:
      'Shake brandy, orange liqueur, and lemon juice with ice, strain into a sugar-rimmed cocktail glass.',
  },
  {
    name: 'Brandy Alexander',
    ingredients: 'Brandy, creme de cacao, cream, nutmeg for garnish',
    instructions:
      'Shake brandy, creme de cacao, and cream with ice, strain into a chilled cocktail glass, garnish with nutmeg.',
  },
]

export const rum: Cocktail[] = [
  {
    name: 'Mai Tai',
    ingredients:
      'Rum, lime juice, orange liqueur, orgeat syrup, dark rum float, mint sprig for garnish',
    instructions:
      'Shake rum, lime juice, orange liqueur, and orgeat syrup with ice, strain into a rocks glass filled with ice, float dark rum on top, garnish with mint sprig.',
  },
  {
    name: 'Pina Colada',
    ingredients:
      'Rum, coconut cream, pineapple juice, pineapple wedge for garnish',
    instructions:
      'Blend rum, coconut cream, and pineapple juice with ice until smooth, pour into a chilled glass, garnish with a pineapple wedge.',
  },
]
