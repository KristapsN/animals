import React, { useState, useEffect, useRef } from 'react';
import AnimalCard from './components/animals/card'
import './App.css';
import 'flexboxgrid'
import FilterMesage from './components/filtermesage/filtermes'


type Anim = {
  id: number
  name: string;
  checked: boolean;

};

type Card = {
  id: number;
  name: string;
  title: string;
  description: string;
  active: boolean;
  picture: string;
  picstatus: boolean;

}
// type Mesage = {
//   mesage: string;
//   status: boolean
// }


function Animals() {


  const [cards, setCards] = useState<Card[]>([
    { id: 1, name: "dogs", title: "Super dogo", description: "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*", picstatus: false },
    { id: 2, name: "dogs", title: "Big dogo", description: "Lorem Ipsum is simply dummy text of.  Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://anasazivet.com/wp-content/uploads/2019/06/kaitlyn-rigg-1668018-unsplash-1.jpg", picstatus: false },
    { id: 3, name: "cats", title: "Njan Njan", description: "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://i.kym-cdn.com/entries/icons/mobile/000/005/608/nyan-cat-01-625x450.jpg", picstatus: false },
    { id: 4, name: "cats", title: "Angry cat", description: "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/68DF/production/_109474862_angrycat-index-getty3-3.jpg", picstatus: false },
    { id: 5, name: "cats", title: "Space cat", description: "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://wallpapercave.com/wp/wp4575160.jpg", picstatus: false },
    { id: 6, name: "cows", title: "Moon cow", description: "Lorem Ipsum is simply dummy text of.  Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://cache.desktopnexus.com/thumbseg/805/805290-bigthumbnail.jpg", picstatus: false },
    { id: 7, name: "chickens", title: "Litle", description: "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A02802B7B0ADFC33BDD257BE603B1BEB0628F6FDC95D4BA410652F8C4CDC76B/scale?aspectRatio=1.78&format=jpeg", picstatus: false },
    { id: 8, name: "donkeys", title: "Ija", description: "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://scx2.b-cdn.net/gfx/news/hires/2017/donkeysneedm.jpg", picstatus: false },
    { id: 9, name: "donkeys", title: "Kong", description: "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.", active: false, picture: "https://cdn02.nintendo-europe.com/media/images/10_share_images/portals_3/H2x1_CharacterHub_DonkeyKong_image1600w.jpg", picstatus: false },
  ])


  const [animalsAll, setAnimlsAll] = useState<Anim[]>([
    { id: 1, name: "dogs", checked: false },
    { id: 2, name: "cats", checked: false },
    { id: 3, name: "cows", checked: false },
    { id: 4, name: "chickens", checked: false },
    { id: 5, name: "donkeys", checked: false }
   
  ])

  // const [mesage, setMesage] = useState<Mesage[]>([{ mesage: "Filtrčija veikta", status: false}])

  const [filterDone, setFilterDone] = useState("")



  const checkHandler = ((index: number) => {
    const newAnim = [...animalsAll]
    newAnim[index].checked = !newAnim[index].checked
    setAnimlsAll(newAnim)
    const cardsList = [...cards]

    cards.forEach((item, index1) => {
      if (item.name === newAnim[index].name) { cardsList[index1].active = !cardsList[index1].active; }
     
    });
   
    
    setCards(cardsList);
  })

  const imageHandler = ((id: number) => {
    const cardToPic = [...cards]
    cards.forEach((item) => {
      item.id === id && (item.picstatus = !item.picstatus)
    })
    setCards(cardToPic)
  });




  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
   //   const n = [...mesage]
  //    n[0].mesage = "Test"    
  //    setMesage(mesage)
  setFilterDone("Filtrācija vekta")

    }
  })



  return (
    <div className="App">

      <div className="container">
        <div className="row">
          <div className="col-md-12">
          {/* {mesage.map(({mesage, status})=>{ 
            <FilterMesage
            mesage= {mesage}
            status= {status}
            mesageHandler= {() => { console.log("test") }}

            />
          })} */}
            <div className="filterdone__wrapper">
              <div className="filterdone">
              {filterDone}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row center-md">
          <div className="col-md-8">
            <div className="filter">
              {animalsAll.map(({ id, name, checked }, index) =>
                <div className="animal--wrapper">
                  <input
                    type="checkbox"
                    checked={checked}
                    className="animals__checkbox"
                    id={`${index}`}
                    onChange={() => checkHandler(index)}
                  />

                  <label
                    htmlFor={`${index}`}>
                    {name}
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row ">

          {cards.filter(card => card.active).map(({ id, name, title, description, active, picture, picstatus }, index: number) =>
            <AnimalCard
              id={id}
              clickHandler={() => { imageHandler(id) }}
              name={name}
              title={title}
              description={description}
              active={active}
              picture={picture}
              picstatus={picstatus}
            />
          )}
      
        </div>
      </div>
    </div>
  );
}

export default Animals;
