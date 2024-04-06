import React from 'react'
import Hero from '../components/hero'
import MensClothing from '../assets/img/men-clothe.png'
import WomensClothing from '../assets/img/women-clothe.png'
import CategoryCard from '../components/categoryCard'
import './styles.css'
const Home = () => {
  return (
    <div>
          <Hero />
          <hr />
          <h2>Categories</h2>
          <div className="cat-cont">
              <CategoryCard imgSrc={MensClothing} title={"Men's"} />
                <CategoryCard imgSrc={WomensClothing} title={"Women's"} />
              
          </div>
    </div>
  )
}

export default Home
