import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import { Flex } from 'antd-mobile';
import { Button, WingBlank } from 'antd-mobile';
import CardDetail from './CardDetail';
import { Link } from 'react-router-dom';
class Cards extends Component {
  state = {
    Food: [
      {
        image:
          'http://masirul.com/wp-content/uploads/2016/07/makanan-khas-jepang-sushi.jpg',
        title: 'sushi shimilikity',
        category: 'Indonesian food',
        durasi: '40 Menit'
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC_92WIsRswah5sfYld9MYdbKmhR1GP8BxEjPtBnVJyrx5HuFAw',
        title: 'Sandwich Kapal Selam',
        category: 'Indonesian food',
        durasi: '40 Menit'
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VShfl-vb_wXvQ89ZGabp3Bl6XoZkxMXS4HznlAU2Mf4lfQcx',
        title: 'Tempura Lek Goyang',
        category: 'Indonesian food',
        durasi: '40 Menit'
      }
    ]
  };
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        {this.state.Food.map(datum => {
          return (
            <Link to="/makanan">
              <Card full>
                <Flex>
                  <Flex.Item>
                    <img
                      style={{
                        width: '80%',
                        height: '80%',
                        paddingTop: '7%',
                        borderRadius: '10px'
                      }}
                      src={datum.image}
                    />
                  </Flex.Item>
                  <div style={{ paddingTop: '1%' }}>
                    <strong>{datum.title}</strong>
                    <br />
                    <p>{datum.category}</p>

                    <p>durasi: >{datum.durasi}</p>
                  </div>

                  <Flex.Item />
                </Flex>
              </Card>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Cards;
