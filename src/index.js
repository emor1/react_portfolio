import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Profile from './compornents/Profile';
import Header from './compornents/header';
import Skills from './compornents/Skills';
import Works from './compornents/Works';

import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
import Contents from './compornents/Contents';


const self_intro = [
  {
    title: "Masato Portfolio",
    subtitle: "いーもりのポートフォリオだよ"
  }
]


const section =[
  {
    sectionTitle: "Home",
    sectionLink: "#top"
  },
  {
    sectionTitle: "Works",
    sectionLink: "#works"
  },
  {
    sectionTitle: "Skills",
    sectionLink: "#skills"
  },
  {
    sectionTitle: "Contact",
    sectionLink: "#contact"
  },
  {
    sectionTitle: "Blog",
    sectionLink: "#blog"
  },
]

const works = [
  {
    title: "CaTwitter",
    info: "ものづくり",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "BBBBBBBBBBBBBBBB"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "CCCCCCCCCCCCCC"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "DDDDDDDDDDDDDDDDD"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "EEEE"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "FFFFFF"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "GGGGGG"
  }
]

const skill = [
  {
      name: "Skill example",
      img: "#"
  },
  {
      name: "Skill example",
      img: "#"
  }
]


let Others = (content) =>{
  const other_content = content.content
  return(
    <div className='container' id={other_content.id}>
      <h2>{other_content.title}</h2>
      <p className='fs-5 text-body '>
        {/* {other_content.icon} <br/> */}
        <AiOutlineLink/>
        <a href={other_content.link} className='text-decoration-none"'>{other_content.link_title}</a>
      </p>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <Header data={section}/>
      <Profile content={self_intro} id="top"/>
      <Works works={works}/>
      <Skills skill={skill}/>
      <Others content={{title:"Contact", link:"https://github.com/emor1", link_title:"GitHub", id:"contact", icon:<AiFillGithub/>}}/>
      <Others content={{title:"Blog", link:"#", link_title: "Blog Page",id:"blog"}}/>
    </main>
  </React.StrictMode>
);

reportWebVitals();
