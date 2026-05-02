import React from 'react';

const Contact = () => {
    return (
        <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Contact Info</h3>

            <div className="border rounded-lg p-4 space-y-2">
                <p>📍 Address: 123 Bookstore Street, Dhaka</p>
                <p>📞 Phone: +880 1234-258040</p>
                <p>📧 Email: support@bookstore.com</p>
                <p>🕒 Open Hours: 9 AM - 8 PM (Sat - Thu)</p>
            </div>
        </div>
    );
};

export default Contact;