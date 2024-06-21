import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global';
import { Main } from './main/main';
import { Page } from './page';
import { PageData } from './types';

import pagesData from './data/page.json';
import { Header } from './header';
import { SocialLinks } from './social-links';
import { useState } from 'react';

type HeaderVariant = 'big' | 'small';

const App = () => {
  const [headerVariant, setHeaderVariant] = useState<HeaderVariant>('big');

  return (
    <>
      <GlobalStyle />
      <Router>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '60em',
        }}>
          <Header variant={headerVariant} />
          <Routes>
            <Route path='/' key={'main'} element={<Main onLoad={() => { setHeaderVariant('big'); }} />} />
            {(pagesData as PageData[]).map((pageData) => (
              <Route
                path={`/${pageData.pageKey}`}
                key={pageData.pageKey}
                element={<Page {...pageData} onLoad={() => { setHeaderVariant('small'); }} />}
              />
            ))}
          </Routes>
        </div>
        <SocialLinks />
      </Router>
    </>
  );
};

export default App;
