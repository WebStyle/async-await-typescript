import Geo from './Geo';

class Address {
    private _street: string;
    private _suite: string;
    private _city: string;
    private _zipcode: string;
    private _geo: Geo;


    constructor(street: string, suite: string, city: string, zipcode: string, geo: Geo) {
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
        this._geo = new Geo(geo.lat, geo.lng);
    }


    get street(): string {
        return this._street;
    }

    set street(value: string) {
        this._street = value;
    }

    get suite(): string {
        return this._suite;
    }

    set suite(value: string) {
        this._suite = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get zipcode(): string {
        return this._zipcode;
    }

    set zipcode(value: string) {
        this._zipcode = value;
    }

    get geo(): Geo {
        return this._geo;
    }

    set geo(value: Geo) {
        this._geo = value;
    }
}

export default Address;