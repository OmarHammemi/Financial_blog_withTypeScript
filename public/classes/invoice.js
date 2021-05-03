//classes
export class Invoice {
    // client:string;
    // details:string;
    // amount:number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} ownes £${this.amount} for ${this.details}`;
    }
}
