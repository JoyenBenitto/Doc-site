import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div></div>
  );
}

/*
function Footer() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <footer className="font-fira mt-auto shadow bg-background border-t border-white border-opacity-25 m-4 underline-offset-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-l text-gray-300 text-opacity-75 whitespace-nowrap">Joyen Benitto</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://github.com/JoyenBenitto" className="mr-4 hover:underline md:mr-6 ">Github</a>
                </li>
                <li>
                    <a href="https://twitter.com/JoyenBenitto" className="mr-4 hover:underline md:mr-6 ">Twitter</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/joyen-benitto-4436031b3/" className="mr-4 hover:underline md:mr-6 ">Linkedin</a>
                </li>
                <li>
                    <a href="/contacts" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline text-button_pink text-opacity-75 hover:text-opacity-100">Joyen Benitto</a>. All Rights Reserved.</span>
    </div>
</footer>
  );
}

*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A site with all my resources">
      <HomepageHeader />
      <main className='font-fira prose prose-invert'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h1 className='pb-2'>Hello👋🏼</h1>
          <p>Hello welcome to the resource site!<br />
           here you will find resources of the workshops and notes and documentations of some of the packages that I have created.</p>
          <p>Click on the button to navigate back to my portfolio site.<br /></p>
          <a href='https://joyenbenitto.com'><button className='border p-3 rounded-lg'>Main website</button></a>
        </div>
      
      </main>
    </Layout>
  );
}
