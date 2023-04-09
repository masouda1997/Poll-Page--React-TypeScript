import React from 'react'
import { Button } from './Button'
import {useState} from 'react'
import { Ul } from './Ul'
import { ListSection } from './ListSection'

interface Props{
   className?:string,
}
export interface IProduct {
   txt: string,
   id: string,
}
const data1:IProduct[]=[
   { "txt": "cons😡","id":"1" },
   { "txt": "cons😡","id":"2" },
   { "txt": "cons😡" ,"id":"3"},
   { "txt": "cons😡" ,"id":"4"},
   { "txt": "cons😡" ,"id":"5"},
   { "txt": "cons😡" ,"id":"6"},
   { "txt": "cons😡" ,"id":"7"},
   { "txt": "cons😡" ,"id":"8"},
]
const data2:IProduct[]=[
   { "txt": "pros😍","id":"1" },
   { "txt": "pros😍","id":"2" },
   { "txt": "pros😍" ,"id":"3"},
   { "txt": "pros😍" ,"id":"4"},
   { "txt": "pros😍" ,"id":"5"},
   { "txt": "pros😍" ,"id":"6"},
   { "txt": "pros😍" ,"id":"7"},
   { "txt": "pros😍" ,"id":"8"},
]

// console.log(dummyData);
export const ProsAndCons:React.FC<Props> = ({className}) => {
   const [btnPros , setBtnPros]= useState<string>("")
   const [btnCons , setBtnCons]= useState<string>("")
   const [checked , setChecked] = useState<boolean>(true)
   const [status , setStatus]= useState<any>(null)
   const [conList, setConList] = useState(data1)
   const [prosList, setProsList] = useState(data2)

   const toggle = (i:any) => {
      setStatus(i);
   };
   const prosHandler = ()=>{
      setChecked(true)
      setBtnPros("!text-[#009dac] text-decoration-line: underline")
      setBtnCons("")
      setStatus(null)
   }
   const consHandler = ()=>{      
      setChecked(false)
      setBtnCons("!text-[#009dac] text-decoration-line: underline")
      setBtnPros("")
      setStatus(null)
       // setStatus(!status)
      // if(status === false){
      //    setChangeClass("")
      // }else{
      //    setChangeClass("!bg-[#009dac] !text-white duration-500")
      // }
      // // alert(e.target.textContent)
      // console.log(typeof e.target.id);
   }


   return (
		<div className={className}>
			<div className="flex justify-evenly lg:py-3">
				<Button
					className={`${btnPros} font-semibold lg:py-0 lg:text-[20px] hover:text-[#009dac] duration-100`}
					onClick={prosHandler}
				>
					نقاط قوت
				</Button>
				<Button
					className={`${btnCons} font-semibold lg:py-0 lg:text-[20px] hover:text-[#009dac] duration-100`}
					onClick={consHandler}
				>
					نقاط ضعف
				</Button>
			</div>

			{/* list section */}

			{checked ? (
				<ListSection
					dataList={prosList}
					toggle={toggle}
					status={status}
				/>
			) : (
				<ListSection
					dataList={conList}
					toggle={toggle}
					status={status}
				/>
			)}
		</div>
   );
}
