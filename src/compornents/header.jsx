
import React from "react"

// https://zenn.dev/mkt_engr/articles/12209df0aac71a
// 後で上を参考にメニューがいを押したら閉じるように実装する

let Header = (props) =>{
    const title = "Masato Iimori Portfolio";
    const w = 30;
    const RobotIcon = (w)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={w.w} height="20" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16"><path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935cw-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
        </svg>
        )
    }

    const SectionHeader = props.data.map((data,i)=>{
        return(
        <li className='nav-item' key={i}>
            <a className="nav-link" href={data.sectionLink}>{data.sectionTitle}</a>
        </li>
        )
    })

    return(
    <nav className='pheader navbar navbar-dark shadow-sm sticky-top'>
        <div className='container'>
        <a href="#" className='navbar-brand d-flex align-items-center'>
            <RobotIcon w={w}/>
            <strong className='text-white'> {title}</strong>
        </a>

        <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarResponsive">
        <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className='navbar-nav ml-auto'>
                    {SectionHeader}
                </ul>
            </div>

        </div>
    </nav>
    )
}

export default Header;