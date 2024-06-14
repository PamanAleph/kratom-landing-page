"use client";
import { PlayIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Swal from 'sweetalert2';

export default function ButtonModal() {
    const handleClick = () => {
        Swal.fire({
            title: "Video",
            html: '<iframe width="746" height="400" src="https://www.youtube.com/embed/mRMQsp90mFM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>',
            width: 900,
            padding: '3em',
            background: '#fff',
            confirmButtonText: "Close",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://unsplash.it/400/200")
                left top
                no-repeat
            `
        });
    };

    return (
        <button
            type="button"
            className="p-5 font-semibold rounded-full bg-white"
            onClick={handleClick}
        >
            <PlayIcon className='size-10' color='#88B44E' />
        </button>
    );
}
