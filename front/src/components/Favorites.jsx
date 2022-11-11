import React, {useState ,useEffect} from 'react'
import { Movie } from "./Movie";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebaseConfig';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from "react-icons/ai";



const Favorites = () => {
  const {user} = UserAuth()
  const [movAndTv, setmovAndTv] = useState([]);

  const movAndTvRef = doc(db, 'users', `${user?.email}`)

  const deleteMovOrTv = async (selectId) => {
    try{
      const resultIds = movAndTv.filter( (i) => i.id !== selectId)
      await updateDoc(movAndTvRef, {
        favoritesMovAndTv: resultIds,
      })
    } catch (error) {
      console.log(error)
    }
  }

  
  
  const moviesAndTv = movAndTv.map((item, id) => (

    
    <div
        key={id}
        className="w-40 sm:w-52 md:w-60 lg:w-72 inline-block relative p-2 cursor-pointer"
      >
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500${item?.img}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p onClick={() => deleteMovOrTv(item.id)} className='absolute top-4 right-4 text-gray-300'><AiOutlineClose /></p>
        </div>
      </div>

      
  ));
 
  useEffect(()=> {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setmovAndTv(doc.data()?.favoritesMovAndTv)
    })
  }, [user?.email])

  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">My Favorites</h2>
      <div className="relative flex items-center group">
        <div className="w-full grid-flow-row mx-9">
          {moviesAndTv}
        </div>
      </div>
    </>
  )
}

export default Favorites