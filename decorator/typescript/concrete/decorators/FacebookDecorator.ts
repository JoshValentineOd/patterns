import BaseDecorator from './BaseDecorator';
export default class FacebookDecorator extends BaseDecorator {
    send(message: string): String {
        
        return `Facebook: ${message} ${super.send(message)}`;
    }
}