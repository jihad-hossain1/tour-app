import { Divider, Typography } from '@mui/material';
import React from 'react';
const footerData = [
    {
        title: "Travel",
        content: [
            { label: "Company", path: "company" },
            { label: "About us", path: "aboutUs" },
            { label: "Press", path: "press" },
            { label: "Blog", path: "blog" }
        ]
    },
    {
        title: "Support",
        content: [
            { label: "Contact Us", path: "contactUs" },
            { label: "FAQ", path: "faq" },
            { label: "Terms & Conditions", path: "termsConditions" },
            { label: "Privacy Policy", path: "privacyPolicy" },
            { label: "Cancellation Policy", path: "cancellationPolicy" },
            { label: "Booking Process", path: "bookingProcess" }
        ]
    },
    {
        title: "Follow Us",
        content: [
            { label: "Facebook", path: "facebook" },
            { label: "Instagram", path: "instagram" },
            { label: "LinkedIn", path: "linkedIn" },
            { label: "Twitter", path: "twitter" },
            { label: "YouTube", path: "youTube" },
            { label: "Pinterest", path: "pinterest" }
        ]
    },
    {
        title: "Work With Us",
        content: [
            { label: "Tour Guide", path: "tourGuide" },
            { label: "Careers", path: "careers" },
            { label: "Affiliates", path: "affiliates" },
            { label: "Travel Agency", path: "travelAgency" }
        ]
    }
];




const Footer = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center border-t bg-gray-100 pb-4 py-8'>
            {footerData.map(section => (
                <div className='max-w-6xl mx-auto print:hidden mb-10 md:mb-0 ' key={section.title}>
                    <Typography variant='h5' className='font-medium text-lg mb-6 border-b md:border-0 border-gray-300 pb-2'>{section.title}</Typography>
                    {section.content.map(item => (
                        <div className='mb-2' key={item.label}>
                            <Typography>{item.label}</Typography>
                            {/* You can add a link here using the item.path */}
                        </div>
                    ))}
                </div>
            ))}
            <hr className='border border-red-900 container mx-auto px-5 text-center' />
            <div className='mt-5'>
                <Typography>hello</Typography>
            </div>
        </div>
    );
};

export default Footer;