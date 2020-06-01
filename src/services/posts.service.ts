import http, { URL } from './utils';

const API = {
  SEARCH_BY_ID: (id: string) => `${URL}/${id}`,
};

interface ISinglePost {
  UserId: string;
  Id: string;
  Title: string;
  Body: string;
}

interface IPostResponse {
  Result: ISinglePost[];
}

export interface IPostProps {
  posts: ISinglePost[];
}

const postService = {
  search: async (name: string) => {
    try {
      const searchResult: IPostResponse = await http.get(API);

      const result: IPostProps = {
        posts: searchResult.Result.map((post) => ({
          UserId: post.UserId,
          Id: post.Id,
          Title: post.Title,
          Body: post.Body,
        })),
      };
      return result;

    } catch (e) {
      console.log(e);
    }
  },
  searchById: async (id: string) => {
    try {
      const resultById: IPostResponse = await http.get(API.SEARCH_BY_ID(id));
      console.log(resultById);
    } catch (e) {
      console.log(e);
    }
  },
};

export default postService;
