import React from 'react';
import { Switch, Route, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';

import SignIn from './SignIn';
import SignUpContainer from './SignUpContainer';
import SingleRepoItem from './SingleRepoItem';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';

const Routes = () => (
  <Switch>
    <Route path="/signIn" exact>
      <SignIn />
    </Route>
    <Route path="/signUp" exact>
      <SignUpContainer />
    </Route>
    <Route path="/repository/:id" exact>
      <SingleRepoItem />
    </Route>
    <Route path="/create_review" exact>
      <CreateReview />
    </Route>
    <Route path="/my_reviews" exact>
      <MyReviews />
    </Route>
    <Route path="/" exact>
      <RepositoryList />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
