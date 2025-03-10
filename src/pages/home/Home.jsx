import React from "react";
import "./../../styles/pages/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home--slider">slider</div>
      <div className="home--articles">
        <article className="home_articles--article">hot and new</article>
        <article className="home_articles--article">popular products</article>
        <article className="home_articles--article">offers</article>
        <article className="home_articles--article">popular cats</article>
        <article className="home_articles--article">recommends</article>
        <article className="home_articles--article">brands</article>
      </div>
    </div>
  );
}
