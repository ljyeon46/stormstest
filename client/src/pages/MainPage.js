import React from 'react';
import SearchAppBar from '../components/common/PageTemplate/PageTemplate';
import Damo from '../components/common/PageTemplate/Treeview';
import SimpleFade from '../components/common/PageTemplate/SimpleFade';

const MainPage = () => {
    return (
        <div>
            <SearchAppBar/>
            <SimpleFade/>
        </div>
    );
};

export default MainPage;