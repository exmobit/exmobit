import { createBrowserRouter } from 'react-router-dom';
import Wrapper from '@components/Layout/Wrapper';

import Faq from '@pages/Faq';
import Main from '@pages/Main';
import Privacy from '@pages/Privacy';
import Partners from '@pages/Partners';
import AboutUs from '@pages/AboutUs';
import Transaction from '@pages/Transaction';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Wrapper>
          <Main />
        </Wrapper>
      ),
    },
    {
      path: '/faq',
      element: (
        <Wrapper>
          <Faq />
        </Wrapper>
      ),
    },
    {
      path: '/about',
      element: (
        <Wrapper>
          <AboutUs />
        </Wrapper>
      ),
    },
    {
      path: '/privacy',
      element: (
        <Wrapper>
          <Privacy />
        </Wrapper>
      ),
    },
    {
      path: '/partners',
      element: (
        <Wrapper>
          <Partners />
        </Wrapper>
      ),
    },
    {
      path: '/transaction',
      element: (
        <Wrapper>
          <Transaction />
        </Wrapper>
      ),
    },
  ]
);

export default router;
