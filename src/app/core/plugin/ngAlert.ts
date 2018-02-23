export class AlertMsg {//alertmsg
    constructor(
        public title: string,
        public text?: string,
        public timer?: number
    ) {
        this.title = title;
        this.text = text;
        this.timer = timer;
    }
}