import axios from 'axios';

export default async (req, res) => {   

    // const posts = [{ 
    //     id: '1', name: 'Some Post 1', description: 'Some Post Desc 1' 
    // }, {
    //     id: '2', name: 'Some Post 2', description: 'Some Post Desc 2'        
    // }];
    // console.log('req.method: ', req.method)

    if(req.method === 'GET') {

        // console.log(req.method)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        return res.json(posts.slice(0, 20));

        
    } else {
        console.log(req.method)
        const postData = JSON.parse(req.body);
        return res.json({
            status: 'Saving Post to DB!',
            ...postData
        })
    }

    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // const posts = response.data;
    // return res.json(posts.slice(0, 20));
}