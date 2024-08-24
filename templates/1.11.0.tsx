import * as React from 'react';
import styles from './<%= componentName %>.module.scss';
import { I<%= componentName %>Props } from './I<%= componentName %>Props';
import { escape } from '@microsoft/sp-lodash-subset';

const <%= componentName %>: React.FC<I<%= componentName %>Props> = (props) => {
  return (
    <div className={ styles.<%= componentNameCamelCase %> }>
      <div className={ styles.container }>
        <div className={ styles.row }>
          <div className={ styles.column }>
            <span className={ styles.title }>Welcome to SharePoint!</span>
            <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
            <p className={ styles.description }>{escape(this.props.description)}</p>
            <a href="https://aka.ms/spfx" className={ styles.button }>
              <span className={ styles.label }>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default <%= componentName %>;
