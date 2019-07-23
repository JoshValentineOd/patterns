class Singleton {
    private static singletonObject: Today;
    static getSingleton(): Today {
        if (!this.singletonObject) {
            this.singletonObject = new Today();
        }
        return this.singletonObject;
    }

    private constructor() {}
}

class Today {
    day: String = "today";
}

const singleton = Singleton.getSingleton();
const antoherOneSingleton = Singleton.getSingleton();
console.log(singleton);
console.log(antoherOneSingleton);
console.log(singleton === antoherOneSingleton);