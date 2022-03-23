import React from 'react';
import { render } from 'react-dom';
import { IndexPage } from './pages/index';

// React UI core CSS
import '@react-ui-org/react-ui/src/lib/theme.scss';
import '@react-ui-org/react-ui/src/lib/foundation.scss';

// React UI CSS helpers
import '@react-ui-org/react-ui/src/lib/helpers.scss';

render(
  <IndexPage />,
  document.getElementById('application'),
);
