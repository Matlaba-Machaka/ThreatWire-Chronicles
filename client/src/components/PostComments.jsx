import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const PostComments = ({ post }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments || []);

  const handleSubmit = () => {
    if (!comment.trim()) return;
    const newComment = {
      id: Date.now(),
      author: "You",
      content: comment,
      date: new Date().toLocaleDateString(),
    };
    setComments([newComment, ...comments]);
    setComment("");
  };

  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <MdSend size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="flex items-start gap-3">
            <FaUserCircle size={30} className="text-gray-500" />
            <div>
              <p className="text-sm font-medium">{c.author}</p>
              <p className="text-xs text-gray-500">{c.date}</p>
              <p>{c.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
