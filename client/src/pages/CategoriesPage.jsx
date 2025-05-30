import { useState } from "react";
import { Card, Pagination, PopularPosts, PopularWriters } from "../components";
import { popular, posts } from "../utils/dummyData";

const CategoriesPage = () => {
  const query = new URLSearchParams(window.location.search).get("cat");
  const numOfPages = 4;
  const [page, setPage] = useState(0);

  const handlePageChange = (val) => {
    setPage(val);
    console.log(val);
  };

  return (
    <div className='px-0 2xl:px-20'>
      <div className='py-5'>
        <h2 className='text-4xl 2xl:text-5xl font-semibold text-green-500 dark:text-green-400 tracking-wide'>
          {query || "Unknown Threat Category"}
        </h2>
        <p className="mt-2 max-w-xl text-slate-700 dark:text-gray-400">
          Explore the latest insights, analyses, and threat intelligence on <strong>{query || "this topic"}</strong>. Stay ahead in the cybersecurity landscape with ThreatWire Chronicles.
        </p>
      </div>

      <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20'>
        {/* LEFT */}
        <div className='w-full md:w-2/3 flex flex-col gap-y-28 md:gap-y-14'>
          {posts?.length === 0 ? (
            <div className='w-full h-full py-8 flex justify-center'>
              <span className='text-lg text-red-600 dark:text-red-500 font-semibold'>
                No Threat Reports Found for this Category.
              </span>
            </div>
          ) : (
            <>
              {posts?.map((post) => (
                <Card key={post?._id} post={post} />
              ))}

              <div className='w-full flex items-center justify-center mt-8'>
                <Pagination
                  totalPages={numOfPages}
                  onPageChange={handlePageChange}
                  activeColor="green"
                />
              </div>
            </>
          )}
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

export default CategoriesPage;
