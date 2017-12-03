import Address from './Address';
import Company from './Company';

class User {
    private _id: number;
    private _name: string;
    private _username: string;
    private _email: string;
    private _address: Address;
    private _company: Company;


    constructor(id: number, name: string, username: string, email: string, address: Address, company: Company) {
        this._id = id;
        this._name = name;
        this._username = username;
        this._email = email;
        this._address = new Address(address.street, address.suite, address.city, address.zipcode, address.geo);
        this._company = new Company(company.bs, company.catchPhrase, company.name);
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    get company(): Company {
        return this._company;
    }

    set company(value: Company) {
        this._company = value;
    }
}

export default User;