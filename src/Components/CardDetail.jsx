import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

class CardDetail extends Component {
  onChange = key => {
    console.log(key);
  };

  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion
          defaultActiveKey="0"
          className="my-accordion"
          onChange={this.onChange}>
          <Accordion.Panel header="Menu Promo">
            <List className="my-list">
              <List.Item>
                <Grid container spacing={24}>
                  {' '}
                  <Grid item xs={8}>
                    <p>Rica-rica Jerapah</p>

                    <span style={{ fontSize: '11px' }}>
                      {' '}
                      Harga Norma Yarwe-yarwe
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Rp10800</p>
                    <Button
                      type="warning"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      -
                    </Button>
                    <Button
                      type="primary"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </List.Item>
              <List.Item>
                <Grid container spacing={24}>
                  {' '}
                  <Grid item xs={8}>
                    <p>Oseng-oseng gajah</p>

                    <span style={{ fontSize: '11px' }}>
                      {' '}
                      Harga Norma Yarwe-yarwe
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Rp10800</p>
                    <Button
                      type="warning"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      -
                    </Button>
                    <Button
                      type="primary"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </List.Item>
              <List.Item>
                <Grid container spacing={24}>
                  {' '}
                  <Grid item xs={8}>
                    <p>Nasi goreng duren</p>

                    <span style={{ fontSize: '11px' }}>
                      {' '}
                      Harga Norma Yarwe-yarwe
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Rp10800</p>
                    <Button
                      type="warning"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      -
                    </Button>
                    <Button
                      type="primary"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Minuman">
            <List className="my-list">
              <List.Item>
                <Grid container spacing={24}>
                  {' '}
                  <Grid item xs={8}>
                    <p>Jus Oreo</p>

                    <span style={{ fontSize: '11px' }}>
                      {' '}
                      Harga Norma Yarwe-yarwe
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Rp10800</p>
                    <Button
                      type="warning"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      -
                    </Button>
                    <Button
                      type="primary"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </List.Item>
              <List.Item>
                <Grid container spacing={24}>
                  {' '}
                  <Grid item xs={8}>
                    <p>ES Duren Kopyor</p>

                    <span style={{ fontSize: '11px' }}>
                      {' '}
                      Harga Norma Yarwe-yarwe
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Rp10800</p>
                    <Button
                      type="warning"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      -
                    </Button>
                    <Button
                      type="primary"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </List.Item>
              <List.Item>
                <Grid container spacing={24}>
                  {' '}
                  <Grid item xs={8}>
                    <p>Wedang Ronde</p>

                    <span style={{ fontSize: '11px' }}>
                      {' '}
                      Harga Norma Yarwe-yarwe
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Rp10800</p>
                    <Button
                      type="warning"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      -
                    </Button>
                    <Button
                      type="primary"
                      inline
                      size="small"
                      style={{ marginRight: '4px' }}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion>
        <Button type="primary">Beli</Button>
        <WhiteSpace />
      </div>
    );
  }
}

export default CardDetail;
