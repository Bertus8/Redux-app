export const GET_POST = "GET_POST";
export const GET_POST_OK = "GET_POST_OK";
export const GET_POST_ERROR = "GET_POST_ERROR";

export const actionGetPost = () => ({
  type: GET_POST,
});

export const actionGetPostOk = (post) => ({
  type: GET_POST_OK,
  payload: post,
});

export const actionGetPostError = () => ({
  type: GET_POST_ERROR,
});

export function getPostById()  {
   return  fetch(`https://jsonplaceholder.typicode.com/posts/1`).then((res)=> {
      if (res.ok) {
        console.log(res)
        return res.json();
    } else {
        return [];
    }
    })
  }
