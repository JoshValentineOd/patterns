import Notifier from "./notifier/Notifier";
import FacebookDecorator from "./decorators/FacebookDecorator";
import SlackDecorator from "./decorators/SlackDecorator";

const notif = new Notifier();
console.log(notif.send('Hello world'));
const decoratorSlak = new SlackDecorator(notif);
const facebookDecorator = new FacebookDecorator(decoratorSlak);

console.log(facebookDecorator.send("Gadfd"));