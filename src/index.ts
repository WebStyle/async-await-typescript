import axios, {AxiosResponse} from 'axios';
import Comment from "./mappers/Comment";

async function main() {

    let response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
    let comments: Array<Comment> = [];

    response
        .data
        .forEach((item: Comment) => comments.push(new Comment(item.id, item.name, item.body, item.email, item.postId)));

    console.log(comments);
}

main();


