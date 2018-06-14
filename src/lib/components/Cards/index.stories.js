import React from 'react';
import Theme from '../../styles/Theme';
import Typography from '../../styles/Typography';

import { storiesOf } from '@storybook/react';

import { Cards, Card, CardHeader, CardBody, CardInfo, CardInfoKey, CardInfoProp } from './index';

// dense	
// raised	
// unelevated
// outlined

const WithTheme = props => {
  return (
    <Theme>
      <Typography>
        { props.children }
      </Typography>
    </Theme>
  )
}

storiesOf('Cards', module)
  .add('Card - Grid', () => {
    return (<WithTheme>
      <Cards>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
      </Cards>
    </WithTheme>)
  })
  .addCentered('Card', () => {
    return (
      <WithTheme>
        <Card>
          <CardHeader>Hello, World</CardHeader>
          <CardBody>
            <CardInfo>
              <CardInfoKey>Name:</CardInfoKey>
              <CardInfoProp>Carson</CardInfoProp>
              <CardInfoKey>Age:</CardInfoKey>
              <CardInfoProp>24</CardInfoProp>
            </CardInfo>
          </CardBody>
        </Card>
      </WithTheme>
    )
  })