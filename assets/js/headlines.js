import GhostContentAPI from '@tryghost/content-api';


export default function showTitles() {

    const api = new GhostContentAPI({
        url: 'http://localhost:2368',
        key: 'e26bed42d986624063e16d6edd',
        version: 'v3'
    });

    let lastPostIndex = 0;

    async function fetchAndDisplayNextPost() {
        const posts = await api.posts.browse({limit: 1, page: lastPostIndex + 1});
        lastPostIndex += 1;
        displayPost(posts[0]);
    }

    function displayPost(post) {
        const postWrapper = document.getElementById("headlines");
        postWrapper.innerHTML = `<a class="gh-card-link" href="${post.url}"><h4 class="text-lg pl-3">${post.title}</h4> </a>`;
    }

    // Call fetchAndDisplayNextPost directly without waiting for DOMContentLoaded
    fetchAndDisplayNextPost();

    setInterval(fetchAndDisplayNextPost, 10000);
}
