	
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/posts/3')
        .then(res => {

            setPosts(res.data.posts)
        })
    }, [])


    return (
        <div>
            <ul>
                

            {
            posts.map((post) => <li>{post.title}</li>)
            }
            </ul>
        </div>
    )
}

export default ApiFetch


// import axios from 'axios';
 
// interface jsonType {
//     id:number,
//     title:number,
//     caption:string,
//     date:string
// }
 
// export const ApiGet_Simple = (URL:string):jsonType[] => {
 
//     // エラー用に空データを準備
//     let return_Json:jsonType[] = [];

//     axios
//         .get<jsonType[]>(URL)
//         .then((results) => {
//             return_Json = results.data;
//             console.log(return_Json);
//       // 成功したら取得できたデータを返す
//             return return_Json;
//         })
//         .catch((error) => {
//             console.log('通信失敗');
//             console.log(error.status);
//             // 失敗したときは空のjsonを返す
//         });
 
//   // エラーの場合はこれを返す
//     return return_Json;
// };