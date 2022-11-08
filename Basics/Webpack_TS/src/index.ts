import Dog from "./dog";
import ShelterDog from "./shelterdog";
import { add, multiply, divide } from "./utils";

const brandy = new Dog("Brandy", "Spaniel", 10);
brandy.bark()

const cliff = new ShelterDog("Cliff", "bloodhound", 14, "shelter")
cliff.bark()