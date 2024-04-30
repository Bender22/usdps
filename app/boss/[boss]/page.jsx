'use client'
import { Tabs, Tab } from '@nextui-org/tabs'
import { CharactersList } from '../../../components/characters-list'
import { useState, useEffect } from 'react'

export default function BossPage ({ params }) {
  const { boss } = params
  const bossNumberICC = {
    'Lord-Marrowgar': 0,
    'Lady-Deathwhisper': 1,
    'Gunship-Battle': 2,
    'Deathbringer-Saurfang': 3,
    Festergut: 4,
    Rotface: 5,
    'Professor-Putricide': 6,
    'Blood-Prince-Council': 7,
    "Blood-Queen-Lana'thel": 8,
    'Valithria-Dreamwalker': 9,
    Sindragosa: 10,
    'The-Lich-King': 11
  }
  const bossNumber = bossNumberICC[boss]
  const [data, setData] = useState([])
  const url = 'https://undeadsheep-backend.netlify.app/api/event'
  useEffect(() => {
    // const fetchData = async () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data[bossNumber].players)
      })
      .catch(error => console.error('Error al obtener los datos:', error))

    // try {
    //   const response = await axios({
    //     method: 'GET',
    //     url: url, // Your API endpoint
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Methods': 'GET', // Set allowed HTTP method
    //     },
    //   });
    //   console.log(response)
    //   setData(response.data[7].players);
    // } catch (err) {
    //   console.log(err)
    // }
    // }
    // fetchData()
  }, [bossNumber])

  const bossNumberTOC = {
    'The-Beasts-of-Northrend': 0,
    'Lord-Jaraxxus': 1,
    'Faction-Champions': 2,
    "Twin-Val'kyr": 3,
    "Anub'arak": 4
  }

  const bossName = boss.replaceAll('-', ' ')
  console.log(boss)
  console.log(bossNumberICC[boss])
  console.log(data)

  const elements = data.map((e) => {
    return {
      ...e,
      c: e.clase.toLocaleLowerCase()

    }
  })
  //
  // const elementsHealing = data[bossNumberICC[boss]].players.map((e) => {
  //   return {
  //     ...e,
  //     c: e.clase.toLocaleLowerCase()
  //
  //   }
  // })

  const sortElementsDamage = elements.sort((a, b) => b.damage_done - a.damage_done)
    .filter(e => e.damage_done > e.healing_done)
  const sortElementsHealing = elements.sort((a, b) => b.damage_done - a.damage_done)
    .filter(e => e.healing_done > e.damage_done)

  return (
      <>
        <b>{bossName}</b>
        <div className="pt-0">

          <Tabs size='md' aria-label="Tabs sizes" className="mt-0 pt-0">
             <Tab key="damage" title="Damage"><CharactersList items={{ sortElements: sortElementsDamage }}/></Tab>
             <Tab key="healing" title="Healing"><CharactersList items={{ sortElements: sortElementsHealing }}/></Tab>

          </Tabs>

        </div>

      </>
  )
}
