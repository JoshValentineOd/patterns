import INotifier from "./INotifier";

export default class Notifier implements INotifier {

    send(message: string): String {
        return `Notifier: ${message}`;
    }
    
}