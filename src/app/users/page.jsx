import React from 'react'
import Head from 'next/head';
import BasicTable from '../components/table/table';
export const metadata = {
    title: "",
    description: ""
}


// import React from 'react'
// import Head from 'next/head';
// import BasicTable from '../components/table/table';

// export const metadata = {
//     title: "",
//     description: ""
// }

const users = async () => {
    metadata.title = "usesr Page title";
    metadata.description = "users Page";

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return (
        <>

            <BasicTable posts={data} />


        </>
    )
}

export default users