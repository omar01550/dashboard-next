"use client"
import Link from 'next/link';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Posts from '@/app/posts/page';
import { useRadioGroup } from '@mui/material';
import { useRouter } from 'next/navigation'

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable({ posts }) {

    const router = useRouter()
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300, cursor: "pointer" }} aria-label="simple table">
                <TableHead>
                    <TableRow onClick={() => {

                    }}>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post) => {
                        return (


                            <TableRow key={post.id} href={"/" + post.id} onClick={() => {
                                router.push(`http://localhost:3000/usesr/${post.id}`)
                            }}>
                                <TableCell>{post.title}</TableCell>
                                <TableCell align="right">{post.title}</TableCell>
                                <TableCell align="right">{post.title}</TableCell>
                            </TableRow>


                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer >
    );
}