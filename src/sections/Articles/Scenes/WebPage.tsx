import { Html } from '@react-three/drei';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface WebPageProps {
  currentArticle: number;
  setCurrentArticle: Dispatch<SetStateAction<number>>;
}

const WebPage = ({ currentArticle, setCurrentArticle }: WebPageProps) => {
  const [articles, setArticles] = useState<{ content: string; url: string }[]>([]);
  const htmlRef = useRef<HTMLDivElement>(null);

  const removeByQueries = (container: Document, queries: string[]): void => {
    queries.forEach((query) => {
      container.querySelector(query)?.remove();
    });
  };

  useEffect(() => {
    if (!articles[currentArticle] || !htmlRef.current) return;

    const containerIframe = htmlRef.current.querySelector('iframe');

    if (!containerIframe) return;

    Object.assign(containerIframe.style, {
      width: '100%',
      height: '100%',
    });

    const documentIframe = containerIframe.contentDocument;
    if (!documentIframe) return;

    documentIframe.body.innerHTML = articles[currentArticle].content;
    documentIframe.body.scrollTop = 0;

    removeByQueries(documentIframe, [
      '.crayons-header',
      '.crayons-article-actions',
      '.multiple_reactions_engagement',
    ]);

    const cover = documentIframe.querySelector<HTMLElement>('.crayons-article__cover');
    if (!cover) return;

    cover.style.height = '0';

    const coverImage = cover.querySelector('img');
    if (!coverImage) return;

    coverImage.style.objectFit = 'cover';

    const articleHeader = documentIframe
      .querySelector<HTMLElement>('.crayons-article__header__meta')!;
    
    const itemsStart = articleHeader.querySelector<HTMLElement>('.items-start');
    if (!itemsStart) return;
    itemsStart.style.marginBottom = '0';
  }, [articles, currentArticle]);

  useEffect(() => {
    const fetchData = async () => {
      const articlesUrl = 'https://dev.to/api/articles?username=kevbeltrao';

      const articlesResponse = await fetch(articlesUrl);
      const articlesData = await articlesResponse.json();

      const articlesFetches = articlesData.map(({ url }: { url: string }) => fetch(url));

      const result = await Promise.all(articlesFetches);

      const articlesDataTextsPromises = result.map((response) => response.text());

      const articlesDataTexts = await Promise.all<string[]>(articlesDataTextsPromises);
      setArticles(articlesDataTexts.map((articleTextContent, index) => ({
        content: articleTextContent,
        url: articlesData[index].url,
      })));
    };

    fetchData();
  }, []);

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
      <Html
        ref={htmlRef}
        position={[0, 1.35, 1.25]}
        transform
        occlude="blending"
        style={{
          width: '460px',
          height: '290px',
          borderRadius: '5px',
          position: 'relative',
        }}
        rotation={[0, Math.PI, 0]}
        scale={0.3}
      >

        <iframe></iframe>

      </Html>

      <Html
        transform
        occlude="blending"
        rotation={[0, Math.PI, 0]}
        position={[0, 2.7, 1.27]}
        color="transparent"
        style={{
          display: 'flex',
          gap: 3,
        }}
      >
        <button
          onClick={previousArticle}
          style={{
            fontSize: 5,
            backgroundColor: '#000',
            color: '#fff',
            width: 25,
            border: '1px solid transparent',
            borderRadius: 3,
          }}
        >Prev</button>

        <a
          href={articles[currentArticle]?.url}
          target="_blank"
          style={{
            fontSize: 5,
            backgroundColor: '#000',
            color: '#fff',
            width: 25,
            border: '1px solid transparent',
            borderRadius: 3,
            textAlign: 'center',
          }}
        >Open</a>

        <button
          onClick={nextArticle}
          style={{
            fontSize: 5,
            backgroundColor: '#000',
            color: '#fff',
            width: 25,
            border: '1px solid transparent',
            borderRadius: 3,
          }}
        >Next</button>
      </Html>
    </>
  );
};

export default WebPage;
