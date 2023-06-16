import React from 'react'


export const metadata = {
    title: "",
    description: ""
}



const User = async (params) => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts/${params.id");
    const data = await res.json();


    return (
        <div id={data.userId}>
            <h1>Lorem {params.id}, dolor sit amet consectetur adipisicing elit. Eos earum libero nam excepturi, cumque nulla ducimus molestiae quisquam placeat rerum? Dolore magnam nisi sit mollitia quidem corrupti. Ad, animi aliquid?
                Lorem {data.userId} dolor, sit amet consectetur adipisicing elit. Fuga repellat cupiditate porro saepe dolor, est pariatur in provident. Quaerat quis alias rem architecto similique, consequatur assumenda accusamus eos recusandae nemo.
                Lorem {data.userId} dolor sit amet consectetur adipisicing elit. Nihil ad impedit quaerat cum voluptatibus odio. Doloribus qui deleniti esse doloremque non odio, beatae magnam harum culpa, nam eos ipsam omnis.
                Lorem {data.userId} dolor, sit amet consectetur adipisicing elit. Eos reiciendis labore esse ea tenetur voluptates accusamus voluptate odit nobis dolorum iusto quia alias dolor blanditiis aliquid, officiis nesciunt possimus neque!
                Lorem {data.userId} dolor, sit amet consectetur adipisicing elit. Quae nemo reprehenderit accusantium libero alias atque illum reiciendis dolore odit? Architecto recusandae tempore dolore totam assumenda nam modi asperiores quos enim!
            </h1>
        </div>
    )
}

export default User
