import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>For any questions or inquiries, please fill out the form below:</p>
            <form>
                <label>Name:</label>
                <input type="text" name="name" />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <textarea name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;