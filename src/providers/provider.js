const url = 'http://localhost:3005/meetings';

export const loadData = () => {
    return fetchData()
}
export const sendData = (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return fetchData(options)
}
const fetchData = (options = {}) => {
    const promise = fetch(url, options)
    return promise 
    .then(resp => {
        if(resp.ok) {
            return resp.json()
        }
        throw new Error('Network error!');
    })
    .catch(err => {
        console.error(err);
    });
}
