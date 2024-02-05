class Key {
  private signature: number = Math.floor(Math.random() * 1000);

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door === true;
    }
  }
}

const key = new Key();
const house = new MyHouse();
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
