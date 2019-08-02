import BaseDecorator from './BaseDecorator';
export default class SlackDecorator extends BaseDecorator {
    send(message: string): String {
        return `Slack: ${message} ${super.send(message)}`;
    }
}