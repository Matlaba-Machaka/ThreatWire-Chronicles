import { useState } from "react";
import { Link } from "react-router-dom";
import {Banner, Card, Pagination, PopularPosts, PopularWriters,} from "../components";

import { CATEGORIES, popular, posts } from "../utils/dummyData";

const Home = () => {
  const numOfPages = 4;
  const [page, setPage] = useState(0);

  const randomIndex = Math.floor(Math.random() * posts.length);

  const handlePageChange = (val) => {
    setPage(val);
    console.log(val);
  };

  if (posts?.length < 1)
    return (
      <div className='w-full h-full py-8 flex items-center justify-center'>
        <span className='text-lg text-red-600 dark:text-red-400 font-semibold'>
          No Threat Reports Available at the Moment.
        </span>
      </div>
    );

  return (
    <div className='py-10 2xl:py-5'>
      <Banner post={posts[randomIndex]} />

      <div className='px-0 lg:pl-20 2xl:px-20'>
        {/* Threat Categories */}
        <div className='mt-6 md:mt-0'>
          <p className='text-2xl font-semibold text-green-500 dark:text-green-400 tracking-wide'>
            Threat Categories
          </p>
          <div className='w-full flex flex-wrap py-10 gap-8'>
            {CATEGORIES.map((cat) => (
              <Link
                to={`/category?cat=${cat?.label}`}
                className={`flex items-center justify-center gap-3 ${cat.color} text-white font-semibold text-base px-5 py-3 rounded cursor-pointer shadow-md hover:shadow-green-400 transition-shadow duration-300`}
                key={cat.label}
              >
                {cat?.icon}
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Threat Reports */}
        <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20'>
          {/* LEFT */}
          <div className='w-full md:w-2/3 flex flex-col gap-y-28 md:gap-y-14'>
            {posts?.map((post, index) => (
              <Card key={post?._id} post={post} index={index} theme="cybersecurity" />
            ))}

            <div className='w-full flex items-center justify-center mt-8'>
              <Pagination
                totalPages={numOfPages}
                onPageChange={handlePageChange}
                activeColor="green"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
            {/* POPULAR THREATS */}
            <PopularPosts posts={popular?.posts} theme="cybersecurity" />

            {/* TOP ANALYSTS */}
            <PopularWriters data={popular?.writers} theme="cybersecurity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
