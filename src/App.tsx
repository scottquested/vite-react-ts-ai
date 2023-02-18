import { useState } from 'react';
import './App.css';
import { getImage } from './api';
import ImageWrap from './components/ImageWrap';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [aiImage, setAiImage] = useState('');
  const [textToSearch, setTextToSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const onGenerateImage = () => {
    loadImage();
  };

  const loadImage = async () => {
    setLoading(true);
    const { data } = await getImage({
      prompt: textToSearch,
      n: 1,
      size: '512x512'
    });
    setAiImage(data.data[0].url);
    setLoading(false);
  };

  const drawImage = () => {
    return aiImage.length ? <img src={aiImage} alt="ai" /> : null;
  };

  return (
    <div className="app">
      <ImageWrap>
        {loading && !aiImage.length ? <div>Loading...</div> : drawImage()}
      </ImageWrap>
      <Input onChange={e => setTextToSearch(e.target.value)} />
      <Button onClick={onGenerateImage}>Generate Image</Button>
    </div>
  );
};

export default App;
