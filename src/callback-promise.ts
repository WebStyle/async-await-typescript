import axios, {AxiosResponse} from 'axios';
import Comment from './mappers/Comment';
import User from './mappers/User';
import Post from './mappers/Post';

/**
 * Entry point
 */
function main() {
    getUsers((users: Array<User>) => {
        getPosts((posts: Array<User>) => {
            getComments((comments: Array<Comment>) => {
                console.log(users);
                console.log(posts);
                console.log(comments);
            });
        });
    });
}

/**
 * Load users
 * @param {Function} callback
 */
function getUsers(callback: Function) {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response: AxiosResponse) => {
        let users: Array<User> = [];
        response.data
            .forEach((user: User) => users.push(new User(user.id, user.name, user.username, user.email, user.address, user.company)));

        callback(users);
    });
}

/**
 * Load comments
 * @param {Function} callback
 */
function getComments(callback: Function) {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(function (response) {
        let comments: Array<Comment> = [];
        response
            .data
            .forEach((comment: Comment) => comments.push(new Comment(comment.id, comment.name, comment.body, comment.email, comment.postId)));

        callback(comments);
    });
}

/**
 * Load comments
 * @param {Function} callback
 */
function getPosts(callback: Function) {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        let posts: Array<Post> = [];
        response
            .data
            .forEach((post: Post) => posts.push(new Post(post.userId, post.id, post.title, post.body)));

        callback(posts);
    });
}

/**
 * Starting app
 */
main();