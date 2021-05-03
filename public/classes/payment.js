//classes
export class PAyment {
    // client:string;
    // details:string;
    // amount:number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} ownes £${this.amount} for ${this.details}`;
    }
}
