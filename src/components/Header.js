import React from 'react';
import { NavLink } from 'react-router-dom'; // Link,

const Header = (props) => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                {/* <li><Link to="/">메인페이지</Link></li>
                <li><a href="/">메인페이지</a></li> 
                {/* a태그는 새로고침 시켜줌 */}
                {/* <li><Link to="/product">상품페이지</Link></li>
                <li><Link to="/detail">상품자세히보기</Link></li> */} 

                {/* isActive일 때 클래스네임을 okay로 붙여줘 */}
                <li><NavLink to="/" className={({isActive})=>isActive? "okay" : ""}>메인페이지</NavLink></li>
                <li><NavLink to="/product/*/*" className={({isActive})=> "green " + (isActive? "okay" : "")}>상품페이지</NavLink></li>
                <li><NavLink to="/detail" className={({isActive})=>isActive? "okay" : ""}>상품자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail1" className={({isActive})=>isActive? "okay" : ""}>1번상품자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail2" className={({isActive})=>isActive? "okay" : ""}>2번상품자세히보기</NavLink></li>
                <li><NavLink to="/info" className={({isActive})=>isActive? "okay" : ""}>정보보기</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;