import RootLayouts from '@/components/Layouts/RootLayouts';
import React from 'react';

const IndexPage = () => {
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  )
}