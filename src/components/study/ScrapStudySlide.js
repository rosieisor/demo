import "../../css/study_css/MyParticipateStudy.css";
import "../../css/mypage_css/Mypage_Scrap.css";
import StudyListItem from "./StudyListItem";
import React from "react";

const ScrapStudySlide = ({studies, toggleLike, toggleScrap, d, index, slide}) => {
  return (
    <li
        className="scrap_study_list"
      style={{
        transform: `translateX(${slide}px)`,
        transition: "0.5s ease",
      }}
    >
        <StudyListItem studies={studies} toggleLike={toggleLike} toggleScrap={toggleScrap} d={d} index={index}/>
    </li>
  );
};
export default ScrapStudySlide;
