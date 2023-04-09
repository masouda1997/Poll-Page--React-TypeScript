import React ,{memo} from 'react'

export interface UlProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
   className?:string,
}

export const Ul:React.FC<UlProps> = ({className,children,...rest}) => {
	return (
      <ul className={`${className}`} {...rest}>
         {/* <span className={`${className}`}>{children}</span> */}
         {children}
      </ul>
   );
};

