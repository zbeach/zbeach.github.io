import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global';
import { Main } from './main/main';
import { Page } from './page';
import { PageData } from './types';

import pagesData from './data/page.json';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        {(pagesData as PageData[]).map((pageData) => (
          <Route
            path={`/${pageData.pageKey}`}
            element={<Page {...pageData} />}
          />
        ))}
      </Routes>
    </Router>
  </>
);

export default App;
