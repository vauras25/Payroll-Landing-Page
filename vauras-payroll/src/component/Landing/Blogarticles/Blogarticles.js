import React from "react";
import "./Blogarticles.css";
import costruction from "../../../image/Web_Imgs/costruction.png"
function BlogArticles() {
  return (
    <div className="blog-page">
      {/* <div className="blog-header-bar">
        <h1 className="blog-header-title">Blog Articles</h1>
      </div> */}
      <div className="blog-body">
        <p className="blog-coming-soon">Coming soon...</p>
        <p className="blog-under-construction">This page is under construction.</p>
        <div className="blog-illustration">
            <img src={costruction} className="info-image" />
        </div>
      </div>
    </div>
  );
}

export default BlogArticles;