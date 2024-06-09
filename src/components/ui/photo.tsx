import React from "react";
interface PhotoProps {
    rtl: boolean;
    height: number;
    content: React.ReactElement
}

export function Photo({ rtl, height, content}: PhotoProps){
    return(
        <div className="flex items-center">
            {!rtl && (
                <div className={`bg-[#0E204E] block w-[100px] h-[${height}px]`} />
            )}
            {content}
            {rtl && (
                <div className={`bg-[#0E204E] block w-[100px] h-[${height}px]`}/>
            )}
        </div>
    )
}