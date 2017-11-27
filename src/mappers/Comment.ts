class Comment {
    private _id: number;
    private _name: string;
    private _body: string;
    private _email: string;
    private _postId: number;

    constructor(id: number, name: string, body: string, email: string, postId: number) {
        this._id = id;
        this._name = name;
        this._body = body;
        this._email = email;
        this._postId = postId;
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

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get postId(): number {
        return this._postId;
    }

    set postId(value: number) {
        this._postId = value;
    }

    getFullInfo(): string {
        return `Name: ${this.name}, message: ${this.body}`;
    }
}

export default Comment;