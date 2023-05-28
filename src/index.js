import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Profile from './compornents/Profile';
import Header from './compornents/header';
// import Popup from './compornents/Popup';
import Skills from './compornents/Skills';

import {BsRobot} from 'react-icons/bs'
import { IconContext } from 'react-icons';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

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
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA"
  }
]

const skill=[
  {
      name: "Skill example",
      img: "#"
  },
  {
      name: "Skill example",
      img: "#"
  }
]


let Content = (props) =>{
  return (
    // コンテンツ全体
    <div className='album py-5 bg-light' id="works">
      <div className='container'>
        <h2>Works</h2>
        <div className='row row-cols-1 row-cols-s3m-2 row-cols-md-3 g-3'>

          {/* コンテンツの中身 */}
          {props.works.map((work, i)=>(
            <div className='col' key={i}>

              <Popup trigger={
                <div className='card shadow-sm'>
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="255" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <rect width="100%" height="100%" fill="#364f6b"/>
                  <text x="50%" y="50%" fill="#f5f5f5" dy=".3em" >{work.title}</text>
                  </svg>

  {/* 後でhttps://getbootstrap.jp/docs/5.0/components/card/#image-overlaysを参考にイメージオーバーレイ実装 */}
                  <div className='card-body'>
                    <p className='card-text'>{work.description}</p>
                    <div className='d-flex justify-content-end'>
                      <small className='text-muted'>Date:{work.date}</small>
                    </div>
                  </div>
                </div>
              }
              modal
              >
                <div >
                    Content: {work.detailed_description}
                </div>
              </Popup>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

const name = [
  {
    title: "Contact",
    id: "contact"
  },
  {
    title: "Blog",
    id : "blog"
  }
]

let BaseContainer=(name)=>{
  return(
    <div>
      {name.name.map((content, i)=>{
        <div className='container' id={content.id}>
          <h2>{content.title}</h2>
        </div>
      })}
    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <Header data={section}/>
      <Profile content={self_intro} id="top"/>
      <Content works={works}/>
      {/* <PopupTest/> */}
      <Skills skill={skill}/>
      {/* <BaseContainer name={name}/> */}
    </main>
  </React.StrictMode>
);

reportWebVitals();
