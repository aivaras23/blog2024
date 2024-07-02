import { Comment } from "./comment";



export interface Post{
    _id?:string;
    title:string;
    content:string;
    author:{
        name:string;
        email:string;
    }
    comments:Comment[];

}