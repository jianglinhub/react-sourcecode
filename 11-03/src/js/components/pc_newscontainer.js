import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProducts from './pc_products';

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dtos: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };

        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div className="leftContainer">
                        <div className="carousel">
                            <Carousel {...settings}>
                                <div><img src="./src/images/carousel_1.jpg" /></div>
                                <div><img src="./src/images/carousel_2.jpg" /></div>
                                <div><img src="./src/images/carousel_3.jpg" /></div>
                                <div><img src="./src/images/carousel_4.jpg" /></div>
                            </Carousel>
                        </div>
                        <PCNewsImageBlock imageWidth="112px" cardTitle="娱乐新闻" count={6} type="yule" width="100%" />
                    </div>
                    <Tabs className="tabs_news">
                        <TabPane tab="新闻" key="1">
                            <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                        </TabPane>
                        <TabPane tab="国际" key="2">
                            <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                        </TabPane>
                    </Tabs>
                    <Tabs className="tabs_product">
                        <TabPane tab="ReactNews 产品" key="1">
                            <PCProducts />
                        </TabPane>
                    </Tabs>
                    <div>
                        <PCNewsImageBlock imageWidth="112px" cardTitle="娱乐新闻" count={8} type="yule" width="100%" />
                        <PCNewsImageBlock imageWidth="132px" cardTitle="国内新闻" count={16} type="guonei" width="100%" />
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        )
    }
}