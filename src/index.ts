import axios, { AxiosResponse } from 'axios';
import Comment from "./mappers/Comment";
import User from "./mappers/User";

async function main() {
    let users: Array<User> = await getUsers();
    console.log('Users', users);
    let comments: Array<Comment> = await getComments();
    console.log('Comments', comments);
}


async function getUsers(): Promise<Array<User>> {
    let response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    let users: Array<User> = [];
    response
        .data
        .forEach((user: User) => users.push(new User(user.id, user.name, user.username, user.email, user.address, user.company)));
    return users;
}


async function getComments(): Promise<Array<Comment>> {
    let response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
    let comments: Array<Comment> = [];
    response
        .data
        .forEach((item: Comment) => comments.push(new Comment(item.id, item.name, item.body, item.email, item.postId)));
    return comments;
}

main();


