import { Html } from '@react-three/drei';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { MeshStandardMaterial } from 'three';

interface WebPageProps {
  currentArticle: number;
  setCurrentArticle: Dispatch<SetStateAction<number>>;
}

const WebPage = ({ currentArticle, setCurrentArticle }: WebPageProps) => {
  const [articles, setArticles] = useState<string[]>([]);
  const htmlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!articles[currentArticle] || !htmlRef.current) return;

    const containerIframe = htmlRef.current!.querySelector('iframe')!;

    containerIframe.style.width = '100%';
    containerIframe.style.height = '100%';

    containerIframe.contentDocument!.body.innerHTML = articles[currentArticle];

    const documentIframe = containerIframe.contentDocument!;

    documentIframe.querySelector('.crayons-header')!.remove();
    documentIframe.querySelector('.crayons-article-actions')!.remove();
    documentIframe.querySelector('.multiple_reactions_engagement')?.remove();
    documentIframe.querySelector<HTMLElement>('.crayons-article__cover')!.style.paddingTop = '20%';
    documentIframe.querySelector<HTMLElement>('.crayons-article__header__meta')!.style.paddingTop = '15px0%';
  }, [articles, currentArticle]);

  useEffect(() => {
    const fetchData = async () => {
      const articlesUrl = 'https://dev.to/api/articles?username=kevbeltrao';

      const articlesResponse = await fetch(articlesUrl);
      const articlesData = await articlesResponse.json();

      const articlesFetches = articlesData.map(({ url }: { url: string }) => fetch(url));

      const result = await Promise.all(articlesFetches);

      const articlesDataTextsPromises = result.map((response) => response.text());

      const articlesDataTexts = await Promise.all(articlesDataTextsPromises);
      setArticles(articlesDataTexts);
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
        <a target="_blank" href="https://google.com">
          <iframe></iframe>
        </a>
      </Html>

      <Html
        transform
        occlude="blending"
        rotation={[0, Math.PI, 0]}
        position={[0, 2.7, 1.27]}
        color="transparent"
        style={{
          backgroundColor: '#fff',
          display: 'flex',
        }}
      >
        <button
          onClick={previousArticle}
          style={{
            fontSize: 5,
            backgroundColor: '#000',
            color: '#fff',
            width: 25,
            border: '1px solid #fff',
            borderRadius: 3,
          }}
        >Prev</button>

        <button
          onClick={nextArticle}
          style={{
            fontSize: 5,
            backgroundColor: '#000',
            color: '#fff',
            width: 25,
            border: '1px solid #fff',
            borderRadius: 3,
          }}
        >Next</button>
      </Html>
    </>
  );
};
 
export default WebPage;
