
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PopularPosts, PopularWriters, PostComments } from "../components";
import useStore from "../store";
import { popular, posts } from "../utils/dummyData";

const BlogDetails = () => {
  const { setIsLoading } = useStore();

  const { id } = useParams();
  const [post, setPost] = useState(posts[1]);

  useEffect(() => {
    if (id) {
      // fetch post logic here
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [id]);

  if (!post)
    return (
      <div className='w-full h-full py-8 flex items-center justify-center'>
        <span className='text-xl text-slate-500'>Loading ThreatWire Chronicle...</span>
      </div>
    );

  return (
    <div className='w-full px-0 md:px-10 py-8 2xl:px-20'>
      <div className='w-full flex flex-col-reverse md:flex-row gap-2 gap-y-5 items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-slate-800 dark:text-white'>
            {post?.title}
          </h1>

          <div className='w-full flex items-center '>
            <span className='flex-1 text-green-500 font-semibold tracking-wide uppercase'>
              {post?.cat || "Threat Category"}
            </span>

            <span className='flex flex-1 items-baseline text-2xl font-medium text-slate-700 dark:text-gray-400'>
              {post?.views?.length || 0}
              <span className='text-base text-green-500 ml-2'>Threat Reads</span>
            </span>
          </div>

          <Link to={`/writer/${post?.user?._id}`} className='flex gap-3'>
            <img
              src={post?.user?.image}
              alt={post?.user?.name}
              className='object-cover w-12 h-12 rounded-full border-2 border-green-500'
            />
            <div>
              <p className='text-slate-800 dark:text-white font-medium'>
                {post?.user?.name}
              </p>
              <span className='text-slate-600'>
                {new Date(post?.createdAt).toDateString()}
              </span>
            </div>
          </Link>
        </div>

        <img
          src={post?.img}
          alt={post?.title}
          className='w-full md:w-1/2 h-auto md:h-[360px] 2xl:h-[460px] rounded object-contain border border-green-500'
        />
      </div>

      <div className='w-full flex flex-col md:flex-row gap-x-10 2xl:gap-x-28 mt-10'>
        {/* LEFT */}
        <div className='w-full md:w-2/3 flex flex-col text-black dark:text-gray-400'>
          {post?.desc && (
            <Markdown
              options={{ wrapper: "article" }}
              className='leading-[3rem] text-base 2xl:text-[20px]'
            >
              {post?.desc}
            </Markdown>
          )}

          {/* COMMENTS SECTION */}
          <div className='w-full mt-12'>
            <h2 className="text-xl font-semibold text-green-500 mb-4">ThreatWire Comments</h2>
            <PostComments postId={id} />
          </div>
        </div>

        {/* RIGHT */}
        <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
          {/* POPULAR POSTS */}
          <PopularPosts posts={popular?.posts} theme="cybersecurity" />

          {/* POPULAR WRITERS */}
          <PopularWriters data={popular?.writers} theme="cybersecurity" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
