import React from 'react';

const Test = ({ data, time }) => {

    const func = async () => {
        const res = await fetch(`/api/revalidate/myagency?rxveohyjwptnzkb`);

        console.log(res, 'console.log', 'res', data)
    }

    console.log(time, 'time data', 'console.log')
    return (
        <div>
            {time + 'hello'}
            <button onClick={() => func()}>revalidate</button>
        </div>
    );
}

export default Test;

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




    // fetch appearance data for meta tags
    const appearanceData = await fetch(
        `${baseurl}RecruiterV2/Profile/GET/GetAppearanceSettings?agency_id=${profileData?.result?._id}`
    ).then((res) => res.json());

    console.log('profileData', 'data', data.active_pricings, data.active_pricings?.length, profileData.result?._id)


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
            time: new Date().toISOString(),
        },
        // revalidate: 86400,
    };
};