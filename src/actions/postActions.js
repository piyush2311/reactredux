import { FETCH_POST, NEW_POST} from './types';

export function fetchPosts() {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => dispatch({
                type: FETCH_POST,
                payload: posts
            }))
    }
}
