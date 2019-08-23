import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    let { lang } = this.props;

    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="mailto:leonardolp@gmail.com" rel="noopener noreferrer">
            {lang === 'pt-br' ? 'contato' : 'contact'}
          </a>
        </div>
        <a
          href="https://github.com/leoeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/leonardoprocopio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    );
  }
}

export default Footer;
