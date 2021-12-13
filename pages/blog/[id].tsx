import React from "react";
import ErrorPage from "next/error";
import { NextRouter, useRouter } from "next/router";
import { fetchAPI } from "lib/api";
import Comments from "components/Comments";
import Footer from "components/Footer";
import SEO from "components/SEO";
import { IComment, IPost } from "lib/models";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQueryInput } from "querystring";

interface IParams extends ParsedUrlQueryInput {
  id?: number;
}

type PostProps = {
  currentPost: IPost;
  comments: IComment[];
};

function Post({ currentPost, comments }: PostProps) {
  const router: NextRouter = useRouter();
  const paragraphs = currentPost.content.blocks.filter(
    (block) => block.type == "paragraph"
  );

  if (!router.isFallback && !currentPost?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="container">
      <SEO
        title={currentPost.title}
        description={currentPost.meta_description}
        ogImage={currentPost.image}
        ogType="website"
      />

      <main className="main">
        <h1 className="title">{currentPost.title}</h1>
        <article className="content">
          {paragraphs.map(
            (paragraph, i) => (
              <p key={i}>{paragraph.data.text}</p>
            )
            // <p key={i}>{paragraph.text}</p>
          )}
        </article>

        <div>
          claps &hearts; : {currentPost.claps_count} <br />
          comments : {currentPost.comments_count}
        </div>

        <Comments comments={comments} ArticleId={currentPost.id} />
      </main>

      <Footer />
    </div>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: { data: IPost[] } = await fetchAPI("/article/scopes/lat/get/0");

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: ArticleId } = params as IParams;

  //we can use "Useeffect" didMount to load comments
  const [currentPost, comments] = await Promise.all([
    fetchAPI(`/article/${ArticleId ? ArticleId : 0}`),
    fetchAPI(`/article/${ArticleId ? ArticleId : 0}/comments/0`, false),
  ]);

  if (currentPost && currentPost.data)
    return {
      props: {
        currentPost: currentPost.data,
        comments: comments.data,
      },
      revalidate: 180,
    };

  return {
    props: {},
    notFound: true,
  };
};
