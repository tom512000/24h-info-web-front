import type CardPropsType from "../types/CardPropsType";
export default function Card({color1, color2, image, title, orientation, children}: CardPropsType){
    return(
        <div className={`shadow-md shadow-indigo-100 bg-gray-800 text-white border-4 border-t-${color1}-500 border-l-${color1}-500 border-b-${color2}-500 border-r-${color2}-500 rounded-sm w-9/10 h-50 flex ${orientation === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`flex h-full place-content-center ${orientation === 'right'? 'border-r' : 'border-l'}-2 ${orientation === 'right'? 'border-r' : 'border-l'}-yellow-300 rounded-lg w-1/5`}>
                <img className="p-5" src={image}/>
            </div>
            <div className={`flex flex-col p-3 gap-4 w-4/5 ${orientation === 'left' && 'text-right'}`}>
                <h1 className="text-2xl">{title}</h1>
                {children}
            </div>
        </div>
    )
}