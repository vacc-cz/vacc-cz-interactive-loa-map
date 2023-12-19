import React from 'react';
import { render } from 'react-dom';
import { IndexPage } from './pages/index';

// React UI core CSS
import '@react-ui-org/react-ui/src/lib/theme.scss';
import '@react-ui-org/react-ui/src/lib/foundation.scss'; // Comment if you want to use Modal styles only

// Import Modal styles only
// import '@react-ui-org/react-ui/src/lib/components/Modal/Modal.scss';

// React UI CSS helpers
import '@react-ui-org/react-ui/src/lib/helpers.scss';

render(
  <IndexPage />,
  document.getElementById('vacc-cz-interactive-map-loa'),
);
