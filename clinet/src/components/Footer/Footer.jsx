import { Typography } from '@mui/material';
import React from 'react';
const footerData = [
    {
        title: "Travel",
        content: ["Company", "About us", "Press", "Blog"]
    },
    {
        title: "Support",
        content: [{ labal: "Contact Us", path: "contactUs" }, "FAQ", "Terms & Conditions", "Privacy Policy", "Cancellation Policy", "Booking Process"]
    },
    {

    },
    {
        title: "Follow Us",
        content: ["Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube",
            "Pinterest"]
    },
    {
        title: "Work With Us",
        content: ["Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube",
            "Pinterest"]
    },
];

const Footer = () => {

    return (
        <div>
            <div>
                <Typography variant='h5'>Travel</Typography>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;