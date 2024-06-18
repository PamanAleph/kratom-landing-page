import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    const phoneNumber = '085161611095';
    const message = encodeURIComponent('Hello, I would like to inquire about your services.');

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <Link href={`https://wa.me/${phoneNumber}?text=${message}`}>
                <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                    <FaWhatsapp size={24} />
                </button>
            </Link>
        </div>
    );
}
