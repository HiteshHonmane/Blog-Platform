import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import Bg from "./../../public/bghome.png";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className=" bg-gray-300 w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex  flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl p-[5vh] font-bold hover:text-gray-500">
                Please Login/Signup to read posts
              </h1>

              <div>
                <div className="flex flex-col text-start ">
                  Test User Login: <br />
                  Email: testuser@gmail.com <br />
                  Password: 12345678
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className=" w-full  ">
      <div className="w-full border-t border-b border-black/30 flex justify-start sm:justify-center items-start">
    <div className="text-zinc-900 font-bold font-['Inter'] text-7xl sm:text-[160.80px] xl:text-[243.80px]">THE BLOG</div>
</div>


      <Container>
        <div className="flex  flex-wrap gap-14 ">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-[600px] m-8   ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
