import { useState, useMemo, useEffect } from 'react';
import { Arrow, OpenArticle } from './styles';

interface ArticleResponse {
  id: string;
  title: string;
  social_image: string;
  url: string;
}

interface Article {
  id: string;
  title: string;
  socialImage: string;
  url: string;
}

const WebContent = () => {
  const [currentArticle, setCurrentArticle] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const article = useMemo(() => articles[currentArticle], [currentArticle, articles]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=kevbeltrao')
      .then((response) => response.json())
      .then((data: ArticleResponse[]) => {
        setArticles(
          data.map(({ id, title, social_image: socialImage, url }) => {
            return {
              id,
              title,
              socialImage,
              url,
            };
          })
        );
      });
  });

  const nextArticle = () => {
    if (currentArticle === articles.length - 1) {
      return setCurrentArticle(0);
    }
    setCurrentArticle(currentArticle + 1);
  };

  const previousArticle = () => {
    if (currentArticle === 0) {
      return setCurrentArticle(articles.length - 1);
    }
    setCurrentArticle(currentArticle - 1);
  };

  return (
    <>
      <h1 style={{ fontSize: '24px', textAlign: 'center', margin: 0 }}>{article?.title}</h1>

      { /* eslint-disable-next-line @next/next/no-img-element */ }
      <img style={{ width: '200px' }} src={article?.socialImage} alt="Banner" />

      <OpenArticle onClick={() => window.open(article?.url, '_blank')}>
        Open article
      </OpenArticle>

      {articles.length > 1 && (
        <>
          <Arrow left onClick={previousArticle} />

          <Arrow onClick={nextArticle} />
        </>
      )}
    </>
  );
};

export default WebContent;
