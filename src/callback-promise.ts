import axios, {AxiosResponse} from 'axios';
import Comment from "./mappers/Comment";
import User from "./mappers/User";


function main() {
   getUsers((users: Array<User>) => {
       getComments((comments: Array<Comment>) => {
           console.log(users);
           console.log(comments);
       });
   })
}

function getUsers(callback: Function) {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response: AxiosResponse) => {
        let users: Array<User> = [];
        response.data
            .forEach((user: User) => users.push(new User(user.id, user.name, user.username, user.email, user.address, user.company)));
        callback(users);
    });

}

function getComments(callback: Function) {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(function (response) {
        let comments: Array<Comment> = [];
        response
            .data
            .forEach((comment: Comment) => comments.push(new Comment(comment.id, comment.name, comment.body, comment.email, comment.postId)));

        callback(comments);
    });
}

main();