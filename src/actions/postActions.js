export const GET_POST = "GET_POST";
export const GET_POST_OK = "GET_POST_OK";
export const GET_POST_ERROR = "GET_POST_ERROR";
const Url = 'https://jsonplaceholder.typicode.com/posts'
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

export const getPostById = (Id) => {
    return fetch(`${Url}`+`${Id}`).then((res)=>{
      if (res.ok) {
        console.log(res)
        return res.json();
    } else {
        return [];
    }
    })
  }
