import React from 'react'

interface TextAreaProps {
   value ?: string;
   onChange?: (value: any) => void;
}

const TextArea:React.FC<TextAreaProps> = ({ 
   value,
   onChange,
}) => {
   return (
		<textarea
			placeholder="نظر خود را در مورد خدمت دریافتی بنویسید."
			value={value}
			className={`w-[95%] flex p-2 rounded-md mx-auto  my-5 border-[#009dac] border-2 placeholder-[#009dac] outline-[#009dac] min-h-[70px]
         lg:w-[70%] lg:min-h-[100px] `}
         onChange={onChange}
		/>
   );
}
export {TextArea}