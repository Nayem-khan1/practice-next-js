import RootLayouts from '@/components/Layouts/RootLayouts';
import Head from 'next/head';
import React from 'react';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Next Home page</title>
        <meta name="home"/>
      </Head>
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