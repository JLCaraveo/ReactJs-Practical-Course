import React, { useState, useEffect } from 'react'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitiialState'

import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initialState'

const Home = () => {
  const inicialState = useInitialState(API)
  return (
    <React.Fragment>
      <Search />

      {inicialState.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            {
              inicialState.mylist.map(item =>
                <CarouselItem key={item.id} {...item} />  )
            }
          </Carousel>
        </Categories>
      }
      

      <Categories title="Tendencias">
        <Carousel>
          {
            inicialState.trends.map(item =>
              <CarouselItem key={item.id} {...item} />  )
          }
          
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {
            inicialState.originals.map(item =>
              <CarouselItem key={item.id} {...item} />  )
          }
        </Carousel>
      </Categories>

    </React.Fragment>
  )
}

export default Home