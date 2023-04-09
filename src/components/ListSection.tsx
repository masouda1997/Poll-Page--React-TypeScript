import React from "react";
import { Ul } from "./Ul";
import { IProduct } from "./ProsAndCons";

interface ListProps {
	dataList: IProduct[];
	toggle: (i: any) => void;
	status: any;
}

export const ListSection: React.FC<ListProps> = ({
	dataList,
	toggle,
	status,
}) => {
	return (
		<>
			<p className="py-3 lg:py-3 text-center md:py-10 lg:text-xl">
				نقاط منفی متخصص را انتخاب کنید
			</p>
         
			<Ul className="grid grid-cols-2 lg:grid-cols-4 lg:w-[70%] m-auto gap-y-3 gap-x-6">

				{dataList.map((item, i) => (
					<li
						onClick={() => toggle(i)}
						className={`${status === i ? "!bg-[#009dac] !text-white duration-500" : ""} 
                  border-[#009dac] text-[#009dac] border text-center rounded-full p-2`}>
						{item.txt}
					</li>
				))}
			</Ul>
		</>
	);
};
