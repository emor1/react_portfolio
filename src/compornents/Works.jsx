import React from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import {AiFillCalendar} from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'



import Contents from "./Contents";

let SampleImage = (work) =>{
  return(
    <div className="card-img ratio ratio-4x3">
    <svg className="bd-placeholder-img card-img-top" role="img" preserveAspectRatio="xMidYMid meet" focusable="false">
    <rect width="100%" height="100%" fill="#364f6b"/>
    <text x="50%" y="50%" textAnchor="middle" fill="#f5f5f5" className="card-img-overlay bg-dar" dy=".5em" >{work.title}</text>
    </svg>
  </div>
  )
}

let Works = (props) =>{
  let WorkImage = (works) =>{
    let work = works.work
    if(work.img==null){
      console.log(work.title+" is null image")
      return(
          <SampleImage title = {work.title}/>
      )
    }else{
      console.log(work.title+ " has image")
      return(
        <div>
          <img src={work.img} alt="" className="card-img ratio ratio-4x3" />
          <div className="card-img-overlay">
            <p  className="text-white bg-dark font-large">{work.title}</p>
          </div>
        </div>

      )
    }
  }
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
                  <WorkImage work={work}/>
  {/* 後でhttps://getbootstrap.jp/docs/5.0/components/card/#image-overlaysを参考にイメージオーバーレイ実装 */}
                  <div className='card-body'>
                    <p className='card-text'>{work.title}</p>
                    <div className='d-flex justify-content-between'>
                      <small className='text-muted'><BiCategoryAlt/> Category: {work.info}</small>
                      <small className='text-muted'><AiFillCalendar/>: {work.date}</small>
                    </div>
                  </div>
                </div>
              }
              modal
              backdrop="true"
              >
                {/* 取り出した要素をコンテンツ表示に渡す */}
                <Contents works={work}/>
              </Popup>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Works