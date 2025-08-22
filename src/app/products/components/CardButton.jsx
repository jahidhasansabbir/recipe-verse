"use client"
import Link from 'next/link';
import React from 'react';

const CardButton = ({id}) => {
    console.log(id);
    return (
        <Link href={`/products/${id}`} className="button font-semibold shadow-md hover:shadow-lg w-full flex items-center justify-center md:py-4">
            View More
          </Link>
    );
};

export default CardButton;