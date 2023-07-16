'use client';

import { usePreview } from '../lib/snaity.preview';
import BlogList from './User/BlogList';

interface Props {
  query: any;
}

const PreviewBlogList = ({ query }: Props) => {
  const posts = usePreview(null, query);
  console.log('Loading Posts...', posts);
  return <BlogList posts={posts} />;
};

export default PreviewBlogList;
