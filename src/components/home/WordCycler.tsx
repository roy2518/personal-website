import React from 'react';

import 'styles/home/WordCycler.scss';

interface WordCyclerProps {
    words: string[];
}

const WordCycler = ({ words }: WordCyclerProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="wordsContainer">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {words.map((word, index) => <div className={(index === currentIndex ? 'visibleWord' : 'hiddenWord')} key={index}>{word}</div>)}
    </div>
  );
};

export default WordCycler;
