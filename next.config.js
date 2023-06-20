/** @type {import('next').NextConfig} */

const github = "https://www.github.com/brayden-meyer/";
const repos = {
  molview: ["moleculeviewer", "mv"],
  photos: ["localphoto", "localphotos", "lp"],
  tc: [],
  lightweb: ["lw"],
  snake: ["python", "py"],
  spaceinvaders: ["si"],
  portfolio: ["this"],
};

const nextConfig = {
  async redirects() {
    const redirects = [];

    for (const [repo, aliases] of Object.entries(repos)) {
      redirects.push({
        source: `/${repo}`,
        destination: `${github}${repo}`,
        permanent: true,
      });

      for (const alias of aliases) {
        redirects.push({
          source: `/${alias}`,
          destination: `${github}${repo}`,
          permanent: true,
        });
      }
    }

    redirects.push({
      source: `/aoda`,
      destination: `/aoda.pdf`,
      permanent: true,
    });

    return redirects;
  },
};

module.exports = nextConfig;
