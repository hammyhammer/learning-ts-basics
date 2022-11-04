interface Movie {
  title: string,
  duration: number
}

interface TVShow {
  title: string,
  numEpisodes: number,
  episodeDuration: number
}
// We confronted with comparing two objects, it can get tricky. 
// An avenue to consider is what unique properties are in those objects.
function getDuration(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration
  }
  return media.duration
}

// We can use instancesof operator to check if something is an instance of another
// Good for classes
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString())
  } else {
    console.log(new Date(date).toUTCString())
  }
}

class User {
  constructor(public username: string) { }

}

class Company {
  constructor(public name: string) { }
}

function printName(entity: User | Company) {
  // Is it from the User class?
  if (entity instanceof User) {
    entity
  }
  // Not from User class, therefore must be Company class
  else {
    entity
  }
}


// Type Predicates

interface Cat {
  name: string,
  numLives: number
}

interface Dog {
  name: string;
  breed: string
}


// We have to add extra syntax to be specific about what animal is. 
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal
    return 'Meow'
  } else {
    animal
  }

}

