import Image from 'next/image'
import React from 'react'

interface TestimonialCardProps{
    description: string;
    image: string;
    name: string;
    position: string;
}

export default function TestimonialCard({description,image,name,position}:TestimonialCardProps) {
    const truncateDescription = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    return (
        <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-gray-500 dark:text-gray-400 ">
            {truncateDescription(description, 250)}
            </p>

            <div className="flex justify-center items-center mt-6 -mx-2">
                <Image className="object-cover mx-2 rounded-full w-14 h-14"
                    src={image} alt="" height={1080} width={1920}/>

                <div className="mx-2">
                    <h1 className="font-semibold text-black">{name}</h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{position}</span>
                </div>
            </div>
        </div>
    )
}
