import { useEffect, useState } from "react";
import './NewsList.css'; // Import CSS for styling

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=5a1fdc72152c41d3955cd8712c6f957f"; 

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news data from the API
  const fetchNews = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.status === "ok") {
        setNews(data.articles); // Set articles as news
      } else {
        setError(data.message); // Handle any errors
      }
      setLoading(false);
    } catch (err) {
      setError("Error fetching news");
      setLoading(false);
    }
  };

  // Fetch news when the component mounts
  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="news-list">
      <h2>News Articles</h2>
      {news.map((article) => (
        <div key={article.url} className="news-card">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}