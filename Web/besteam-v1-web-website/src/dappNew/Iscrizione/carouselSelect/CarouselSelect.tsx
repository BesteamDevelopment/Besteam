import React from 'react';
import Slider from 'react-slick';
import { MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';
import 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import donna from '../../media/donna.jpg'
import uomo from '../../media/uomo.jpg'


const options = [
  { value: 'slide1', label: 'Slide 1' },
  { value: 'slide2', label: 'Slide 2' },
  { value: 'slide3', label: 'Slide 3' },
];

const CarouselWithSelect = () => {
  const [selectedSlide, setSelectedSlide] = React.useState(options[0].value);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChange = (event) => {
    setSelectedSlide(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Select a slide:
      </Typography>
      <FormControl>
        <InputLabel id="select-label">Select a slide</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedSlide}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Slider {...settings}>
        <div>
          <img src={uomo} alt="Slide 1" />
        </div>
        <div>
          <img src={donna} alt="Slide 2" />
        </div>
       
      </Slider>
    </div>
  );
};

export default CarouselWithSelect;