import Image from 'next/image';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface IntroCardProps {
    image: string;
}

export default function IntroCard({ image }: IntroCardProps) {
    const handleClick = () => {
        MySwal.fire({
            html: `<div class="modal-content"><img src="${image}" alt="Product Image" class="modal-image" /></div>`,
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                popup: 'swal-modal',
            },
            width: 'auto',
        });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
            <div className="w-[300px] h-[300px] rounded-lg shadow-md cursor-pointer" onClick={handleClick}>
                <Image
                    src={image}
                    alt="Product Image"
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
        </div>
    );
}
