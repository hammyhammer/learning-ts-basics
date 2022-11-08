import Dog from "./dog.js";

export default class ShelterDog extends Dog {
  constructor(name: string, breed: string, age: number, shelter: string) {
    super(name, breed, age)
  }

}