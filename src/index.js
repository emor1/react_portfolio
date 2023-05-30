import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Profile from './compornents/Profile';
import Header from './compornents/header';
import Skills from './compornents/Skills';
import Works from './compornents/Works';

import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
import {BsRobot} from "react-icons/bs"
import {SiBlender, SiPython, SiUnity, SiArduino, SiCplusplus, SiProcessingfoundation, SiRaspberrypi, SiJavascript, SiReact, SiCsharp, SiBootstrap, SiTwitter} from "react-icons/si"


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
    date:"2022-10-26",
    detailed_description: "AAAAAAAAAAAAAAAAAA",
    img: `${process.env.PUBLIC_URL}/img/catwitter.JPG`
  },
  {
    title: "バーチャルθ館",
    info: "CG、メタバース",
    date:"2022-10-26",
    detailed_description: "BBBBBBBBBBBBBBBB",
    img: `${process.env.PUBLIC_URL}/img/theta4_3.jpg`
  },
  {
    title: "匂いの回路",
    info: "ものづくり",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "",
    img: `${process.env.PUBLIC_URL}/img/nioi_kairo.png`
  },
  {
    title: "アニマトロニクスヘッド",
    info: "ロボット",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "",
    img: `${process.env.PUBLIC_URL}/img/animatronic_face.jpg`
  },
  {
    title: "AR年賀状",
    info: "CG",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "EEEE",
    img: `${process.env.PUBLIC_URL}/img/AR4_3.jpg`
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
  },
  {
    title: "作ったもの",
    info: "カテゴリ",
    description: "説明",
    date:"2022-10-26",
    detailed_description: "GGGGGG"
  }
]

const skills = [
  {
      name: "Blender",
      icon: <SiBlender/>
  },
  {
      name: "Python",
      icon: <SiPython/>
  },
  {
      name: "Unity",
      icon: <SiUnity/>
  },
  {
      name: "Arduino",
      icon: <SiArduino/>
  },
  {
      name: "C++/ C",
      icon: <SiCplusplus/>
  },
  {
      name: "Processing",
      icon: <SiProcessingfoundation/>
  },
  {
    name: "RaspberryPI",
    icon: <SiRaspberrypi/>
  },
  {
    name: "JavaScript/ Node.js",
    icon: <SiJavascript/>
  },
  {
    name: "React",
    icon: <SiReact/>
  },
  {
    name: "Robotics",
    icon: <BsRobot/>
  },
  {
    name: "C#",
    icon: <SiCsharp/>
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap/>
  }
];


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
      <Skills skills={skills}/>
      <Others content={{title:"Contact", link:"https://github.com/emor1", link_title:"GitHub", id:"contact", icon:<AiFillGithub/>}}/>
      <Others content={{title:"Blog", link:"#", link_title: "Blog Page",id:"blog"}}/>
    </main>
  </React.StrictMode>
);

reportWebVitals();
