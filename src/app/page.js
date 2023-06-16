"use client"
import { Box, Paper } from "@mui/material";
import Chart from "./components/chart/chart";
// import Editor from "./components/editor/editor";
import UsersTable from "./components/usersTable/table";



// meta data 
export const metadata = {
    title: 'Home page',
    description: 'dashboard home page',
}



const page = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <main>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "50px"


            }}>
                <Paper style={{
                    width: "fit-content"
                }}>
                    <Chart />
                </Paper>

                <Paper style={{
                    width: "fit-content"
                }}>
                    <Chart />
                </Paper>

                <Paper style={{
                    width: "fit-content"
                }}>
                    <Chart />
                </Paper>

            </Box>
            <UsersTable />
            {/* <Editor /> */}

        </main >
    )
}

export default page
