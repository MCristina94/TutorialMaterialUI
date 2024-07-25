import styled from "@emotion/styled"
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

const Product = () => {

    const Img = styled("img")({
        widows: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    })
    
    return (
    <Paper
        sx={{
            display: "flex",
            alignContent: "center",
            gap: 2,
            overflow: "hidden",
            mt: 5,
        }}
    >
    <Img src="https://via.placeholder.com/200"
         alt="imagen numero 1"
    />
    <Box sx={{flexGrow: 1, display: "grid", gap: 2, my: 4}}>
        <Typography variant="h4">Product Name</Typography>
        <Typography variant="body1">Product Description</Typography>
        <Button variant="contained">Add Card</Button>
    </Box>
    <Box sx={{mr: 2, mt: 10}} component="p">
        $19.99›
    </Box>
    </Paper>
  )
}

export default Product