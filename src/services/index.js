// create our url
export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/blog`;
// make a config object (somewhere to hold our key)
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const nytimesURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q={health}&api-key=${process.env.REACT_APP_ARTICLE_KEY_API}`;

