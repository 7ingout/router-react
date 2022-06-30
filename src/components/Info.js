import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import Info1 from './Info1';
import Info2 from './Info2';

const Info = (props) => {
    return (
        <div>
            정보 페이지입니다.
            <div>
                {/* 서브라우터는 / 없이 적어도 됨 */}
                <Link to="info1">정보1</Link>
                <Link to="info2">정보2</Link>
            </div>
            <Routes>
                <Route path="info1" element={<Info1/>}/>
                <Route path="info2" element={<Info2/>}/>
                <Route/>
            </Routes>
        </div>
    );
};

export default Info;