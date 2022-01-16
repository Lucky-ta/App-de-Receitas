import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import '../App.css';
import '../css/profile.css';

const classObject = {
  headerProfilerContainer: 'profile-header header-profile-container',
  profileIcon: 'profile-profile-icon',
  headerTitleContainer: 'profile-title-container',
  headerTitle: 'header-name header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

function Profile() {
  const history = useHistory();

  function verifyEmail() {
    if (localStorage.getItem('user')) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return email;
    }
    return '';
  }

  function logOut() {
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('user');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    history.push('/');
  }

  return (
    <div>
      <Header title="Perfil" isRender={ false } classes={ classObject } />
      <div className="user-options">
        <div className="user-container">
          <h3 data-testid="profile-email" className="user">{verifyEmail()}</h3>
        </div>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ logOut }
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
