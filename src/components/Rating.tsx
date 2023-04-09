import React from "react";
import ReactStars from "react-star-rating-component"
import { Interface } from "readline";
import { useState } from "react";
import {BsStar ,BsStarFill, BsStarHalf} from 'react-icons/bs'

interface RatingProps {
   className?: string;
   count: number;
   value: number;
   color?: string;
   hoverColor?: string;
   activeColor?: string;
   size?: number;
   edit?: boolean;
   isHalf?: boolean;
   onChange?: (value: number) => void;
   emptyIcon?: React.ReactElement;
   halfIcon?: React.ReactElement;
   fullIcon?: React.ReactElement;
}

interface IconProps {
	color?: string;
}

const FullStar = ({ color = "#cfcfcf" }: IconProps) => {
	return (
		<div style={{ color: color }}>
         <BsStarFill size={30}/>
		</div>
		);
};

const HalfStar = ( {color = "#cfcfcf"} : IconProps) => {
	return (
		<div style={{ color: color }}>
			<BsStarHalf size={30}/>
		</div>
	);
};

const EmptyStar = ({color= "#cfcfcf"} : IconProps) => {
	return (
		<div style={{ color: color }}>
			<BsStarFill size={30}/>	
		</div>
	);
};

export const Rating: React.FC<RatingProps> = ({
	className,
	count,
	value,
	color,
	hoverColor = "#ffe207",
	activeColor = "#ffc107",
	isHalf,
	onChange,
	emptyIcon = <EmptyStar />,
	halfIcon = <HalfStar />,
	fullIcon = <FullStar />,
}) => {
	const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

	const handleMouseMove = (index: number) => {
		setHoverValue(index);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};

	const handleClick = (index: number) => {
		if (onChange) {
			onChange(index + 1);
		}
	};

   const getColor = (index: number) => {
		if (hoverValue !== undefined) {
			// star is empty so get hover color of star 
			if (index <= hoverValue) {
				return hoverColor;
			}
		}
		// its a filled star and gets its color 
		if (value > index) {
			return activeColor;
		}
		return color;
   };

   const stars = [];
   for (let i = 0; i < count; i++) {
		let star: React.ReactElement;
		if (isHalf && value - i > 0 && value - i < 1) {
			star = halfIcon;
		} else if (i < value) {
			star = fullIcon;
		} else {
			star = emptyIcon;
		}

		if (hoverValue !== undefined) {
			if (i <= hoverValue) {
				star = fullIcon;
			}
		}

		stars.push( 
			<div
				key={i}
				style={{ cursor: "pointer" }}
				onMouseMove={() => handleMouseMove(i)}
				onMouseLeave={handleMouseLeave}
				onClick={() => handleClick(i)}
			>
				{React.cloneElement(star, {
					color: getColor(i),
				})}
			</div>
		);
   }

	return (
		<>
			<div className={`rating ${className}`}>
				{stars}
			</div>
			<p className='text-center  text-sm lg:text-base duration-300 text-gray-700 my-4 '>
				{value === 5 && <b>عالی </b>}
				{value === 4 && <b>خوب </b>}
				{value === 3 && <b>متوسط </b>}
				{value === 2 && <b>ضعیف </b>}
				{value === 1 && <b>خیلی ضعیف </b>}
				{value === 0 && <div className="p-4"></div>}
			</p>
			
		</>
	)
};

// export interface RatingProps {
//    activeColor ?: string;
//    count ?: number;
//    size ?: number;
//    onChange ?: (newRating:number)=> void;
// }

// export const Rating :React.FC<RatingProps> = ({
//    activeColor,
//    count,
//    size,
//    onChange,
// })=>{
//    return(
//       <ReactStars
//          count = {count}
//          activeColor = {activeColor}
//          size = {size}
//          onChange = {onChange}
//       />
//    );
// };

// export const Rating  = ()=>{
//    return(
//       <h1>rating star</h1>
//    );
// };


