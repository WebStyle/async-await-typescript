class Company {
    private _bs: string;
    private _catchPhrase: string;
    private _name: string;


    constructor(bs: string, catchPhrase: string, name: string) {
        this._bs = bs;
        this._catchPhrase = catchPhrase;
        this._name = name;
    }


    get bs(): string {
        return this._bs;
    }

    set bs(value: string) {
        this._bs = value;
    }

    get catchPhrase(): string {
        return this._catchPhrase;
    }

    set catchPhrase(value: string) {
        this._catchPhrase = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

export default Company;