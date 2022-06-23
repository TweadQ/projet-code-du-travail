import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <Header className='bg-[#7994d4] flex items-center justify-end text-[#2f3b6c]'>
      <div className=''>
        <h2 className='text-4xl pb-2'>Bienvenue sur</h2>
        <h1 className='text-5xl pb-5'>le Code du travail numérique</h1>
        <p className='pb-5'>Obtenez les réponses à vos questions sur le droit du travail.</p>
        <p className='font-medium'>Recherchez par mots-clés</p>
        <input 
        className='modifInput' 
        type="text" 
        placeholder="congés payés, durée de préavis"
        />
      </div>
      <div className="">
        <img src="img/bg.svg" alt="" width={600} />
      </div>
    </Header>
  );
}

const Header = styled.div`
.modifInput {
    width: 50rem;
    height: 3rem;
    position: absolute;
    border-radius: 0.5rem;
    border: 0.03rem solid #2f3b6c;
}
`


