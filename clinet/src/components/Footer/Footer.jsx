import { Typography } from '@mui/material';

import img1 from "./logo/americanExpress.png"
import img2 from "./logo/discover.png"
import img3 from "./logo/masterCard.png"
import img4 from "./logo/paypal.png"
import img5 from "./logo/visa.png"

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


const paymentMethod = [
    img1, img2, img3, img4, img5
]

const Footer = () => {

    return (
        <>
            <div className='grid grid-cols-2 gap-5 lg:flex justify-between border-t bg-gray-100 pb-4 py-8'>
                {footerData.map(section => (
                    <div className='max-w-6xl mx-auto print:hidden mb-10 md:mb-0 ' key={section.title}>
                        <Typography variant='h5' className='font-medium text-lg mb-10 border-b md:border-0 border-gray-300 pb-2'>{section.title}</Typography>
                        {section.content.map(item => (
                            <div className='my-2 hover:underline cursor-pointer' key={item.label}>
                                <Typography>{item.label}</Typography>
                                {/* You can add a link here using the item.path */}
                            </div>
                        ))}
                    </div>
                ))}

            </div>
            <div className='flex flex-wrap md:justify-center lg:justify-end gap-5 mx-5 lg:mr-10 h-10'>
                {paymentMethod.map((methods, index) => (<img key={index} className='h-16 w-16' src={methods} alt="" />))}
            </div>

            <hr className='border border-blue-400 container mx-auto my-5' />
            <div className='p-3 text-center '>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    Traveler - {new Date().getFullYear()}
                </Typography>
            </div>
        </>
    );
};

export default Footer;