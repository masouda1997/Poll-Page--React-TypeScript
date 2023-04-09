import React from 'react';
import {Button, ProsAndCons, Rating, TextArea, TitleBar} from './components';


function App() {

	const [rating, setRating] = React.useState(0);

	return (
		<form
			className="font-vazir h-[90%] overflow-hidden "
			onClick={(e) => e.preventDefault()}
		>
			<div className="w-[95%] flax relative h-fit m-auto">
				<TitleBar/>

				{/* rating component */}
				<Rating
					className="flex gap-3 justify-center my-2"
					count={5}
					value={rating}
					isHalf={false}
					onChange={(value: any) => setRating(value)}
				/>
				{/* poll comment box */}
				<TextArea onChange={(e: any) => console.log(e.target.value)} />

				{/*cons and pros section  */}
				<ProsAndCons className="mt-5 tall--xs:hidden" />
			</div>

			{/* submit button */}
			<div className="relative w-[95%] m-auto bg-gray-500">
				<Button
					className="
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
					border-none "
				>ثبت بازخورد </Button>
			</div>
		</form>
	);
}

export default App;
