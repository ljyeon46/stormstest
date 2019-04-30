import React from 'react';
import SearchAppBar from '../components/common/PageTemplate/PageTemplate'
import SimpleBadge from '../components/common/PageTemplate/Badge'

const MainPage = () => {
    return (
        <div>
            <SearchAppBar/>
            <SimpleBadge/>
            STORM 메인 페이지입니다
        </div>
    );
};

export default MainPage;