import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const works = [
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
  }
]


let Profile = (props) =>{
  return(
    <section className='py-5 text-center container'>
      <div className='row py-lg-5'>
        <div className='col-lg-6 col-md-8 mx-auto'>
          <h1 className="fw-light">title</h1>
          <p className='lead text-muted'>
            いーもりのポートフォリオだよ
          </p>
        </div>
      </div>
    </section>
  )
}

function Test(props){
  return(
    <div>
      {props.works.map((work, i)=>(
        // <React.Fragment>
        <div key={i}>
          <h1 >{work.title}</h1>
          <p >{work.description}</p>
          <p>{i}</p>
        </div>
        // </React.Fragment>
      ))}
    </div>
  );
}

let Content = (props) =>{
  return (
    // コンテンツ全体
    <div className='album py-5 bg-light'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

          {/* コンテンツの中身 */}
          {props.works.map((work, i)=>(
            <div className='col' key={i}>
            <div className='card shadow-sm'>
              <svg className="bd-placeholder-img card-img-top" width="100%" height="255" role="img" focusable="false">
              <rect width="100%" height="100%" fill=""/>
              <text x="40%" y="50%" fill="#eceeef" dy=".3em">{work.title}</text>
              </svg>

              <div className='card-body'>
                <p className='card-text'>{work.description}</p>
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
    <Profile/>
    <Content works={works}/>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
