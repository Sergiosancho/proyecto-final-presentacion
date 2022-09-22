import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom';
import { Coin } from '../components/Coin';
//describes diferentes escenarios del componente
describe('Coin', () => {
  //given
  //when
  test('Coin render, name should be visible ', () => {
    render(
      <Coin
        id={"bitcoin"}
        name={"Bitcoin"}
        price={20000}
        symbol={"btc"}
        marketcap={50000}
        volume={21000000}
        image={"https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769__480.jpg"}
        priceChange={12.5}
        sparkLine={[5000, 3000, 4000]}
      />, {wrapper: Router});
    //then
    const elemento = screen.getByText(/Bitcoin/);

    expect(elemento).toBeVisible;
  });
});

test('retorna  status 200', async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=true',
  );
  expect(response.status).toBe(200);
});
