import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const TemplatesPage = () => {
  return (
    <DashboardLayout>
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <h1 className="text-4xl font-bold">Templates</h1>
            <p className="mt-4">Browse our library of professionally designed templates.</p>
        </div>
    </DashboardLayout>
  );
};

export default TemplatesPage;
