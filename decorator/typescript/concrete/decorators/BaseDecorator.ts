import INotifier from "../notifier/INotifier";
import Notifier from "../notifier/Notifier";

export default class BaseDecorator implements INotifier {

    protected notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    send(message: string): String {
        return this.notifier.send(message);
    }

}