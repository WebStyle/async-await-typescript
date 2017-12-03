import axios, { AxiosResponse } from 'axios';
import Comment from "./mappers/Comment";
import User from "./mappers/User";

/**
 * Entry point
 * @returns {Promise<void>}
 */
async function main() {
    let users: Array<User> = await getUsers();
    let comments: Array<Comment> = await getComments();

    console.log('Users', users);
    console.log('Comments', comments);
}

/**
 * Load users
 * @returns {Promise<Array<User>>}
 */
async function getUsers(): Promise<Array<User>> {
    let response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    let users: Array<User> = [];
    response
        .data
        .forEach((user: User) => users.push(new User(user.id, user.name, user.username, user.email, user.address, user.company)));
    return users;
}

/**
 * Load comments
 * @returns {Promise<Array<Comment>>}
 */
async function getComments(): Promise<Array<Comment>> {
    let response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
    let comments: Array<Comment> = [];
    response
        .data
        .forEach((comment: Comment) => comments.push(new Comment(comment.id, comment.name, comment.body, comment.email, comment.postId)));
    return comments;
}

/**
 * Starting app
 */
main();


