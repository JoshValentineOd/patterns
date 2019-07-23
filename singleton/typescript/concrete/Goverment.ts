export default class Goverment {
    private static instance: Goverment;

    private constructor() {};

    public static getInstance() {
        if (!this.instance) {
            Goverment.instance = new Goverment();
        }
        return Goverment.instance;
    }
}

