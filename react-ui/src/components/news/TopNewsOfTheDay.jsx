import './topNewsOfTheDay.css';
import { useSelector } from 'react-redux';
import { useGetTopNewsForUsaQuery } from '../../redux/services/gNewsApi';
import { topNewsFromUsaData } from '../../redux/reducers/topNewsFromUsa';
import { useState, useEffect } from 'react';

const TopNewsOfTheDay = () => {

    // summoning data from rtk api
    const fetchData = useSelector(topNewsFromUsaData);
    const { data, isLoading } = useGetTopNewsForUsaQuery(fetchData);
    // managing state of newsArticles
    const [, setNewsArticle] = useState(data?.articles);
    // managing state of index in data array
    const [selectedArticle, setSelectedArticle] = useState(0);
    
    useEffect(() => {
        const articleSelection = () => {
            setNewsArticle(data?.articles[selectedArticle]);
        };
        articleSelection();
    }, [data?.articles, selectedArticle]);
    
    const newsArticles = data?.articles[selectedArticle]

    return (
        <div className="top-news-container">
            {isLoading ? <h1>Loading...</h1> : 
            <div className="news-card" key={newsArticles.source.name + newsArticles.publishedAt}>
                <div className="news-image">
                    <img src={newsArticles.image} alt={newsArticles.title} />
                </div>
                <div className="news-title">
                    <h3>{newsArticles.title}</h3> - <a href={newsArticles.source.url} rel="noreferrer" target="_blank" >{newsArticles.source.name}</a>
                </div>
                <div className="news-content">
                    <a href={newsArticles.url}>{newsArticles.content}</a>
                </div>
            </div>
            }
            <div className="article-buttons">
                <button
                    onClick={() => setSelectedArticle(0)}
                >
                </button>
                <button
                    onClick={() => setSelectedArticle(1)}
                >
                </button>
                <button
                    onClick={() => setSelectedArticle(2)}
                >
                </button>
                <button
                    onClick={() => setSelectedArticle(3)}
                >
                </button>
                <button
                    onClick={() => setSelectedArticle(4)}
                >
                </button>
            </div>
        </div>
    )
}

export default TopNewsOfTheDay;