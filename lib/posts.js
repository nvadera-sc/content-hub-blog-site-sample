import { getData } from './data'

export async function getSortedPostsData() {
  const query = "{ blogs:allM_Content_Blog(orderBy:CREATEDON_DESC) { results { id, date:content_PublicationDate, title:blog_Title } } }"
  const blogsData = await getData(query);
  return blogsData.blogs.results;
}

export async function getAllPostIds() {
  const query = "{ blogs:allM_Content_Blog { results { id } } }"
  const blogsData = await getData(query);
  return blogsData.blogs.results;
}

export async function getPostData(id) {
  const query = `{ blog:m_Content_Blog(id:"${id}") { id date:content_PublicationDate title:blog_Title body:blog_Body } }`
  const blogData = await getData(query);
  return blogData.blog;
}