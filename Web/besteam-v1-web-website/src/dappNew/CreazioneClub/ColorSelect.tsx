import React, { useState } from 'react';
import { Select, MenuItem, FormControl, Box } from '@mui/material';

export default function ColorSelect({ color, setColor, type }) {
    const [coloreRiga, setColoreRiga] = useState('#ffffff')

    const handleChange = (event) => {
    setColoreRiga(event.target.value)
        if (type === 1) {

            setColor(colors.filter((color) => { return color.color == event.target.value })[0].id);

        } else {
            setColor(colorSecond.filter((color) => { return color.color == event.target.value })[0].id);

        }
    };

    const colors = [
        { id: 1, value: 'pistacchio', color: '#ceff00' },
        { id: 2, value: 'verde', color: '#a7ffc3' },
        { id: 3, value: 'celeste', color: '#64ffff' },
        { id: 4, value: 'azzurro', color: '#0074d9' },
        { id: 5, value: 'rosso', color: '#ff0049' },
        { id: 6, value: 'arancio', color: '#ffa500' },
        { id: 7, value: 'giallo', color: '#ffff00' },
        { id: 8, value: 'beige', color: '#f7d289' },
        { id: 9, value: 'rosa', color: '#f06292' },
        { id: 10, value: 'fucsia', color: '#f364ff' },
        { id: 11, value: 'viola', color: '#8247e4' }
    ];


    const colorSecond = [
        { id: 1, value: 'nero', color: '#1c1c1c' },
        { id: 2, value: 'grigio', color: '#606060' },
        { id: 3, value: 'bianco', color: '#fcfcfc' },


    ]


    return (
        <FormControl fullWidth>
            <Select
                sx={
            {
                width:'14.306vw',            
                height:'1.528vw',
                backgroundColor:coloreRiga
            }
                }
                value={color}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                renderValue={(selected) => {

                    return <Box style={{ width: '100%', height: '100%', backgroundColor: selected }} />;
                }}
            >
                {(type === 1) ? colors.map((option) => (
                    <MenuItem key={option.value} value={option.color} style={{ backgroundColor: option.color, color: option.color }}>
                        {/* Vuoto per non mostrare il nome del colore */}
                    </MenuItem>
                )) : colorSecond.map((option) => (
                    <MenuItem key={option.value} value={option.color} style={{ backgroundColor: option.color, color: option.color }}>
                        {/* Vuoto per non mostrare il nome del colore */}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    );
}