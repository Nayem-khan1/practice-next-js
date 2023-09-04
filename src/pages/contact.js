import RootLayouts from '@/components/Layouts/RootLayouts';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>This is contact page</h1>
        </div>
    );
};

export default Contact;

Contact.getLayout = function getLayout (page) {
    return (
        <RootLayouts>
            {page}
        </RootLayouts>
    )
}