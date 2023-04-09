import React from 'react'

interface TextAreaProps {
   className?: string;
   value ?: string;
   onChange?: (value: number) => void;
   placeholder ?: string;
}

const TextArea:React.FC<TextAreaProps> = ({ 
   className ,
   placeholder,
   value,
   onChange,
}) => {
   return (
		<textarea
			placeholder="نظر خود را در مورد خدمت دریافتی بنویسید."
			value={value}
			className={`w-[95%] flex p-2 rounded-md mx-auto  my-5 border-[#009dac] border-2 placeholder-[#009dac] outline-[#009dac] min-h-[70px]
         lg:w-[70%] lg:min-h-[100px] `}
		/>
   );
}
export {TextArea}