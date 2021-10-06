import React from 'react'
import {Select, Typography, Row, Col, Avatar, Card,} from "antd";
import moment from 'moment'
import {useGetCryptoNewsQuery} from "../services/cryptoNewsApi";

const {Text, Title} = Typography;
const {Options} = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06cryptonews.jpg'

const News = (simplified) => {
    const {data: cryptoNews} = useGetCryptoNewsQuery({
        newsCategory: 'Cryptocurrency',
        count: simplified ? 6 : 12
    })

    // console.log(cryptoNews)
    if (!cryptoNews?.value) return 'Loading...'

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((newsItem, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={newsItem.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{newsItem.name}</Title>
                                <img src={newsItem?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                            </div>

                            <p>
                                {newsItem.description > 100 ? `${newsItem.description.substring(0, 100)}...`
                                    : newsItem.description}
                            </p>

                            <div className="provider-container">
                                <div>
                                    <Avatar src={newsItem.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                                            alt=""/>
                                    <Text className="provider-name">
                                        {newsItem.provider[0]?.name}
                                    </Text>
                                </div>
                                <Text>{moment(newsItem.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
