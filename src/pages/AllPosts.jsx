import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import PostCard2 from '../components/PostCard2';

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full  py-8'>



        <Container >
            
            <div className='flex sm:flex-wrap  flex-wrap-reverse  '>
                {posts.map((post) => (
                    <div key={post.$id} className=' flex  xl:m-24'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts