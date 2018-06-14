import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Crumb = styled(Link)`
  color: ${ props => props.theme.secondary.dark };
  text-decoration: none;
`
const CurrentCrumb = styled.span`
  color: ${ props => props.theme.env.headerBlack };
`

const BreadCrumbs = (props) => {

  const { url } = props.match;

  const splitUrl = url.split('/')
    .map((component, k, collection) => {
      return {
        title: k === 1 ? 'Databases' : component,
        href: collection.slice(0, k + 1).join('/')
      }
    });
  
  const baseComponents = splitUrl.slice(1, splitUrl.length - 1);
  const lastComponent = splitUrl[splitUrl.length - 1];
  
  const crumbs = baseComponents.map(component => (
    <Fragment key={component.href}>
      <Crumb to={component.href}>{component.title}</Crumb> /&nbsp;
    </Fragment>
  )).concat(<CurrentCrumb key={lastComponent.href}>{lastComponent.title}</CurrentCrumb>)

  return (
    <p>
      { crumbs }
    </p>
  );

};

BreadCrumbs.propTypes = {
};

export default BreadCrumbs;