import { useState } from "react";
import usePosts from "../Hooks/usePosts";
import ReactPaginate from "react-paginate";

const Post = () => {
    const posts = usePosts();
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 10;

    const offset = currentPage * postsPerPage;
    const currentPosts = posts[0].slice(offset, offset + postsPerPage);
    const pageCount = Math.ceil(posts[0].length / postsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h1 className="text-3xl text-center py-10">Post List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">ID</th>
                            <th className="px-4 py-2 border-b">Title</th>
                            <th className="px-4 py-2 border-b">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((post) => (
                            <tr key={post.id}>
                                <td className="px-4 py-2 border-b">{post.id}</td>
                                <td className="px-4 py-2 border-b">{post.title}</td>
                                <td className="px-4 py-2 border-b">{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"flex flex-wrap items-center justify-center space-x-2"}
                    pageClassName={"px-3 py-1 border rounded cursor-pointer"}
                    previousClassName={"px-3 py-1 border rounded cursor-pointer"}
                    nextClassName={"px-3 py-1 border rounded cursor-pointer"}
                    activeClassName={"bg-blue-500 text-white"}
                    disabledClassName={"opacity-50 cursor-not-allowed"}
                />
            </div>
        </div>
    );
};

export default Post;
