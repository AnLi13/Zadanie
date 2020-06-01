import http, { URL } from './utils';

const API = {
    SHOW_POSTS: () => `${URL}posts`,
    SHOW_POST: (id: Number) => `${URL}posts/${id}`,
    SHOW_COMMENTS: () => `${URL}comments`,
    SHOW_USER: (id: Number) => `${URL}users/${id}`
}
interface ISinglePost {
    userId: Number;
    id: Number;
    title: string;
    body: string;
}

export interface IPostResponse {
    Result: ISinglePost[];
}

export interface IPostProps {
    posts: ISinglePost[];
}



const service = {
    showPosts: async () => {
        try {
            const postArray: IPostResponse = await http.get(API.SHOW_POSTS());
            const result: IPostProps = {
                posts: postArray.Result.map((post) => ({
                    userId: post.userId,
                    id: post.id,
                    title: post.title,
                    body: post.body,
                })),
            };
            return result;
        }
        catch (error) {
            console.log(error);
        }
    },
    showPost: async (id:Number) =>{
        try {
            const result: ISinglePost = await http.get(API.SHOW_POST(id));
            return result;
        }
        catch (e){
            console.log(e);
        }
    }
}
export default service;
