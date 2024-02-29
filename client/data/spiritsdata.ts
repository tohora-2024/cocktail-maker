export interface Cocktail {
  name: string
  ingredients: string
  instructions: string
}

export const vodka: Cocktail[] = [
  {
    name: 'Cosmopolitan',
    ingredients: 'Vodka, lime juice, triple sec, cranberry juice',
    instructions:
      'Shake all the ingredients together with ice. Strain into a cocktail glass and serve with a garnish.',
  },
  {
    name: 'Moscow Mule',
    ingredients: 'Vodka, ginger beer, fresh lime',
    instructions:
      'Pour 30ml vodka for a single, 60ml vodka for a double, add desired amount of ginger beer and a slice of lime.',
  },
  {
    name: 'Vodka Tonic',
    ingredients: 'Vodka, tonic water, lime or lemon wedge',
    instructions:
      'Pour 30ml vodka for a single, 60ml vodka for a double, add desired amount of tonic water and top with a slice of lemon or lime (or both if you are adventurous).',
  },
  {
    name: 'Vodka Sour',
    ingredients:
      'Vodka, lemon juice, sugar syrup, bitters, egg white or foamer',
    instructions:
      'Pour 30ml vodka for a single, 60ml vodka for a double, about 15ml lemon juice, 15ml sugar syrup (or less if you prefer it to be less sweet), few drops of bitters and a small amount of a foamer. Shake it up and serve with ice.',
  },
]

export const gin: Cocktail[] = [
  {
    name: 'Gin and Tonic',
    ingredients: 'Gin, tonic water, lime wedge',
    instructions:
      'Pour 30ml of gin for a single or 60ml for a double, pour in your desired amount of tonic water and serve with a lime wedge.',
  },
  {
    name: 'Flamingo',
    ingredients: 'Gin, pineapple juice, guava puree, lime juice, sugar syrup',
    instructions:
      'Pour 60ml gin, 60ml pineapplejuice, 20ml guava puree, 15ml lime juice, 15ml sugar syrup. Add them to a shaker with ice. Shake and strain.',
  },
  {
    name: 'Queens Cocktail',
    ingredients: 'Gin, pineapple juice, red vermouth, dry vermouth',
    instructions:
      'Pour 45ml gin, 20ml red vermouth, 15ml dry vermouth and 30ml of pineapple juice. Shake all ingredients with ice and pour into chilled glass.',
  },
  {
    name: 'Cranberry Gin Fizz',
    ingredients: 'Gin, cranberry puree, sugar syrup, soda water, orange slice',
    instructions:
      'Pour 30ml gin for a single or 60ml for a double, add 1 teaspoon of cranberry puree, 15ml sugar syrup. Shake these 3 ingredients in a shaker, strain into a glass. Top up the glass with soda water and add an orange slice on top.',
  },
]

export const whiskey: Cocktail[] = [
  {
    name: 'Irish Rose',
    ingredients:
      '60ml Whiskey, 15 ml lemon juice, 10ml sugar syrup, 10ml grenadine, soda water',
    instructions:
      'Pour whiskey, lemon juice, sugar syrup, grenadine into a shaker. Shake with ice and pour into a glass. Top with soda water if desired.',
  },
  {
    name: 'Old Fashioned',
    ingredients: 'Whiskey, sugar syrup, bitters, salted water, orange slice',
    instructions: 'make it taste gross and you got an old fashioned',
  },
  {
    name: 'New York Sour',
    ingredients:
      '60ml Bourbon/Whiskey, 30ml lemon juice, 15ml sugar syrup, 30ml red wine',
    instructions:
      'Fill cocktail shaker with ice. Add your bourbon/whiskey, lemon juice, sugar syrup. Shake and sevre in a glass. Gently pour the wine over the top of the glass to add a layer on top. For best results, choose a sweet and fruity wine.',
  },
  {
    name: 'Paris Between The Wars',
    ingredients:
      '30ml Scotch Whiskey, 30ml Campari, 1 tablespoon lemon juice, 1 tablespoon sugar syrup, dry sparkling wine',
    instructions:
      'Combine Campari, Scotch, lemon juice, simple syrup in a shaker. Shake with ice and strain into a chilled glass and top with sparkling wine.',
  },
]

export const brandy: Cocktail[] = [
  {
    name: 'Froupe',
    ingredients:
      '45ml Brandy, 45ml red vermouth, 5ml benedictine liqueur, 2 dashes optional bitters',
    instructions:
      'Stir all ingredients with ice and strain into a chilled glass.',
  },
  {
    name: 'French 75',
    ingredients:
      '30ml lemon juice, teaspoon powdered sugar, 15ml gin, 15ml apple brandy, 15ml regular brandy, 5ml grenadine syrup, 2 dashes absinthe, champagne',
    instructions:
      'Stir powdered sugar with lemon juice in a glass. Add all ingredients but the champagne. Shake with ice and strain into ice-filled glass. Top with champagne.',
  },
  {
    name: 'General Harrisons Nog',
    ingredients:
      '45ml brandy, 60ml cider, 15ml sugar syrup, 2 dashes bitters, 1 egg',
    instructions:
      'Shake all ingredients with ice, strain into a chilled glass. Egg is optional, but makes it foamy.',
  },
  {
    name: 'Apple Jack',
    ingredients:
      '45ml brandy, 15ml apple juice, 15ml lemon juice, 10ml sugar syrup ',
    instructions:
      'Shake all ingredients with ice and strain into a chilled glass.',
  },
]

export const rum: Cocktail[] = [
  {
    name: 'Daiquiri',
    ingredients: '60ml rum, 20ml lime juice, 10ml sugar syrup, 4 drops bitters',
    instructions:
      'Shake all ingredients with ice and strain into a chilled glass. Optional to blend with a fruity puree and ice to have a slushy texture.',
  },
  {
    name: 'Captain Jack Sparrow',
    ingredients:
      '30ml Spiced Brown Rum, 30ml passion fruit rum, 30ml coconut rum, 60ml pineapple juice, 30ml blue curacao syrup',
    instructions:
      'Mix all ingredients together and fill the rest of the glass with sprite.',
  },
  {
    name: 'Mojito',
    ingredients:
      'Mint leaves, 60ml white rum, 15ml lime juice, 10ml sugar syrup, soda water',
    instructions:
      'Add all ingredients except soda water into a glass. Crush with a muddler or spatula handle. Fill glass with soda water and ice.',
  },
  {
    name: 'Breakfast Club',
    ingredients:
      '1 teaspoon orange marmalade, 1 teaspoon honey, 60ml white rum, 30ml cold tea.',
    instructions:
      'Stir honey and marmalade with rum until dissolved. Add tea, shake with ice and strain into a chilled glass.',
  },
]
