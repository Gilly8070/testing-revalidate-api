export default async function handler(req, res) {
    let agencyName = req.query.agencyName
    let str = req.url?.split('?') && req.url?.split('?')[1];
    let val = 'rxveohyjwptnzkb';
    let revalidated = false;
    console.log(req.query, 'req', 'console.log2222', agencyName, str, agencyName);

    // Check for secret to confirm this is a valid request
    // if (str !== val) {
    //     return res.status(401).json({ message: 'Invalid token' })
    // }

    try {
        // this should be the actual path not a rewritten path
        // e.g. for "/blog/[slug]" this should be "/blog/post-1"
        await res.revalidate(`/test`);
        // await res.revalidate(`/_sites/${agencyName}/pricing`);
        revalidated = true;
        // return res.json({ revalidated: true });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        console.log(err, 'err')
        return res.status(500).send('Error revalidating')
    }
    return res.json({ revalidated });
}