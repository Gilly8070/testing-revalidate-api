import React from 'react';
import Carousel from '../src/components/Carousel';
import Hero from '../src/components/Hero';
import TestIcons from '../src/components/TestIcons';

function HomePage({ data }) {

    const func = async () => {
        // const res = await fetch(`/api/revalidate/myagency?rxveohyjwptnzkb`);

        console.log(res, 'console.log', 'res', data)
    }
    return (
        <div>
            {/* <Hero
                title={props.title}
                subTitle={props.subTitle}
                text={props.text}
            /> */}
            {'time' + 'hello'}
            <button onClick={() => func()}>revalidate</button>
            <TestIcons />
            <Carousel />
        </div>
    );
}

export default HomePage;

// export async function getStaticPaths() {
//     const paths = [];
//     return {
//         paths: paths,
//         fallback: "blocking",
//     };
// }


export const getStaticProps = async (context) => {

    let siteName = 'myagency';
    const baseurl = "https://testapikube.lineupx.com/";

    // fetch profile information for given site name
    const profileData = await fetch(
        `${baseurl}RecruiterV2/Profile/GET/GetAgencyByDomainName?site_name=${siteName}`
    ).then((res) => res?.json());




    // fetch pricing data for job board
    let dev = process?.env?.NODE_ENV === 'development' ? 'http://localhost:5004' : 'https://test.lineupx.com'

    const res = await fetch(dev + `/api/pricing/${profileData.result?._id}`)
    const data = await res?.json();

    console.log('profileData', data, 'data')



    // fetch appearance data for meta tags
    const appearanceData = await fetch(
        `${baseurl}RecruiterV2/Profile/GET/GetAppearanceSettings?agency_id=${profileData?.result?._id}`
    ).then((res) => res.json());

    // if no profile data is found for given site name
    // then redirect to 404 page
    if (profileData?.message) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            agencyId: profileData.result?._id,
            data: data,
            appearanceData: appearanceData,
            time: new Date().getTime(),
        },
        // revalidate: 86400,
    };
};