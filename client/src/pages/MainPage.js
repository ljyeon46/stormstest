import React from 'react';
import PersistentDrawerLeft from '../components/common/PageTemplate/Drawers';
import RecipeReviewCard from '../components/common/main/TodayReview'

const MainPage = () => {
    return (
        <div>
            <PersistentDrawerLeft/>
            <RecipeReviewCard/>
        </div>
    );
}

export default MainPage;