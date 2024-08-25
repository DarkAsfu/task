import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const usePosts = () => {
    const [loading, setLoading] = useState(true)
    const {data: posts = [], refetch} = useQuery({
        queryKey: ['posts'],
        queryFn: async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            setLoading(false)
            return res.json();
        }
    })
    return [posts, loading, refetch]
};

export default usePosts;