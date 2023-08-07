export default class Team {
  constructor() {
    this.characters = new Set();
  }

  addCharacter(character) {
    if (this.characters.has(character)) {
      throw new Error(`Герой ${character.name} уже добавлен`);
    }
    this.characters.add(character);
  }

  addAll(...args) {
    args.forEach((item) => {
      this.characters.add(item);
    });
  }

  toArray() {
    return Array.from(this.characters);
  }

  [Symbol.iterator]() {
    const arr = this.toArray();
    let i = 0;

    return {
      next() {
        if (arr.length > i) {
          return {
            value: arr[i++],
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
