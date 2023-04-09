import React from 'react';
import {MdClose} from 'react-icons/md'
import {Button, ProsAndCons, Rating, TextArea, TitleBar} from './components';
import { useState } from "react"
import './assets/fonts/font.css' 


function App() {
	const [rating, setRating] = React.useState(0);

	// const handleRatingChange = (newRating: number) => {
	// 	setRating(newRating);
	// };

	return (
		<form className='h-[90%] overflow-hidden 'onClick={(e)=>e.preventDefault()}>
			<div className='w-[95%] flax relative h-fit m-auto'>

				<TitleBar />
				<h1 className="text-center text-lg lg:text-2xl font-bold my-2"> مسعود انارکی </h1>

				{/* rating component */}
				<Rating 
					className="flex gap-3 justify-center my-2"
					count={5}
					value={rating}
					edit={true}
					onChange={(value: any) => setRating(value)}
				/>
				{/* poll box */}
				<TextArea onChange={(e:any)=>console.log(e.target.value)}/>

				{/*cons and pros */}
				<ProsAndCons className=' mt-5 tall--xs:hidden'/>
			</div>
				
				
			{/* submit button */}
			<div className='relative w-[95%] m-auto bg-gray-500'>
				<Button className='
					lg:w-[35%] transform lg:right-0 lg:left-0 lg:text-[23px] lg:line-clamp-6 
					line-clamp-4
					md:text-2xl
					sm:text-base 
					w-[95%] h-[50px] m-auto
					rounded-full
					flex justify-center items-center
					fixed
					bottom-[5%]
					left-0
					right-0
					bg-[#009dac] 
					text-white 
					border-none '> 
						ثبت بازخورد 
				</Button>
			</div>
		</form>
	);
}

export default App;
