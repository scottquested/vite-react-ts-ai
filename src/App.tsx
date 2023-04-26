import { FormEvent, useEffect, useState } from 'react';
import { getImage } from './api';
import ImageWrap from './components/ImageWrap';
import Input from './components/Input';
import Button from './components/Button';

import './App.scss';
import Loading from './components/Loading';
import classnames from 'classnames';
import Heading from './components/Heading';

const App = () => {
  const [aiImage, setAiImage] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [textToSearch, setTextToSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const onGenerateImage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (aiImage.length) {
      setAiImage('');
      setImageLoaded(false);
    }
    loadImage();
  };

  const loadImage = async () => {
    setLoading(true);
    try {
      const { data } = await getImage(
        {
          prompt: textToSearch,
          n: 1,
          size: '512x512'
        },
        apiKey
      );

      setAiImage(data.data[0].url);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      alert(e.response?.data?.error?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (import.meta.env.DEV) {
      setApiKey(import.meta.env.VITE_OPEN_AI_KEY);
    }
  }, []);

  const drawImage = () => {
    return aiImage.length ? (
      <img
        src={aiImage}
        alt="ai"
        onLoad={() => {
          setImageLoaded(true);
        }}
        className={classnames('image-wrap__image', {
          'image-wrap__image--loaded': imageLoaded
        })}
      />
    ) : null;
  };

  return (
    <div className="app">
      <Heading>
        Generate an Image using{' '}
        <span className="heading--highlight">OpenAI</span>
      </Heading>
      <p>
        Enter your API key to get started. You can find more information on the{' '}
        <a href="https://platform.openai.com">OpenAI website</a>
      </p>
      <div className="app__container">
        <ImageWrap>
          {loading && !aiImage.length && <Loading loading={loading} />}
          {drawImage()}
        </ImageWrap>
        <form className="app__form" onSubmit={onGenerateImage}>
          <Input
            onChange={e => setApiKey(e.target.value)}
            defaultValue={apiKey}
            placeholder="Please enter your API key"
            type={'password'}
            label="API key"
            disabled={import.meta.env.DEV}
          />
          {!!apiKey?.length && (
            <>
              <Input
                onChange={e => setTextToSearch(e.target.value)}
                placeholder="Type what image you want to generate"
                disabled={!apiKey.length}
                label="Image search"
              />
              <Button
                disabled={!apiKey.length || !textToSearch.length}
                type="submit"
              >
                Generate Image
              </Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
