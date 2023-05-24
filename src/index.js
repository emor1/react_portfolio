import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './compornents/Profile';
import Header from './compornents/header';
import Popup from './compornents/Popup';
import {BsRobot} from 'react-icons/bs'
import { IconContext } from 'react-icons';

const self_intro = [
  {
    title: "Masato Portfolio",
    subtitle: "いーもりのポートフォリオだよ"
  }
]


const section =[
  {
    sectionTitle: "Home",
    sectionLink: "#"
  },
  {
    sectionTitle: "Works",
    sectionLink: "#"
  },
  {
    sectionTitle: "Skills",
    sectionLink: "#"
  },
  {
    sectionTitle: "Contact",
    sectionLink: "#"
  },
  {
    sectionTitle: "Blog",
    sectionLink: "#"
  },
]

const works = [
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26"
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26"
  }
]



let Content = (props) =>{
  return (
    // コンテンツ全体
    <div className='album py-5 bg-light'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-s3m-2 row-cols-md-3 g-3'>

          {/* コンテンツの中身 */}
          {props.works.map((work, i)=>(
            <div className='col' key={i}>
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
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <Header data={section}/>
      <Profile content={self_intro}/>
        <Popup/>
      <Content works={works}/>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
