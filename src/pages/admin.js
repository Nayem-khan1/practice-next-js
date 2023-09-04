import DashboardLayout from '@/components/Layouts/DashboardLayout';
import RootLayouts from '@/components/Layouts/RootLayouts';
import React from 'react';

const Admin = () => {
    return (
        <div>
            <h1>This is Admin page</h1>
        </div>
    );
};

export default Admin;

Admin.getLayout = function getLayout (page) {
    return (
        <RootLayouts>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayouts>
    )
}