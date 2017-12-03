class Post {
    private _userId: number;
    private _id: number;
    private _title: string;
    private _body: string;


    constructor(userId: number, id: number, title: string, body: string) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }


    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }
}

export default Post;