import React from 'react';
import MealCards from '../cards/MealCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCategories from '../buttons/MealsCategories';
import { MAX_CARDS } from '../global/constants';
import '../App.css';

const classObject = {
  headerProfilerContainer: 'header header-profile-container',
  profileIcon: 'profile-icon',
  headerTitleContainer: 'header-title-container',
  headerTitle: 'header-name header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

export default function Meals() {
  const recommendation = {
    isRecommendation: false,
    size: MAX_CARDS,
  };
  return (
    <div className="meals-body">
      <Header title="Comidas" isRender classes={ classObject } />
      <MealsCategories />
      <MealCards data={ recommendation } />
      <Footer />
    </div>
  );
}
