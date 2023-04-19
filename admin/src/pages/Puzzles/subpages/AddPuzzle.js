import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import Heading from '../../../components/Heading'

import { handleUploadImage } from '../../../lib/cloudinary'
import { toast } from 'react-toastify'
import AddPicture from '../../../components/AddPicture'
import CustomButton from '../../../components/CustomButton'

const AddPuzzle = () => {
  const [title, setTitle] = useState('')
  const [cardImage, setCardImage] = useState('')
  const [pictures, setPictures] = useState([{
    image: '',
    answer: []
  }])


  const handleCardImage = () => {
    const url = handleUploadImage()
    if(url && url.err) {
      toast(url.err)
    } else if(url && url.url) {
      setCardImage(url.url)
      toast("Upload Success!")
    }
  }

  const addPicture = () => {
    setPictures([...pictures, {image: '', answer: []}])
  }

  const pictureChange = () => {

  }

  let removePicture = (i) => {
    let newPictures = [...pictures];
    newPictures.splice(i, 1);
    setPictures(newPictures)
  }

  return (
    <Layout>
      <Heading title={"Add a New Puzzle"} subtitle={"Bring your creativity to the fullest."}/>

      <div className='max-w-[700px] pt-5'>
        <div>
            <p>Title of the Puzzle</p>
            <input className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='Think of an interesting title'/>
        </div>

        <div className='mt-5'>
            <p>Card Image</p>
            {cardImage === '' && <div onClick={handleCardImage} className='py-3 text-center border-dashed border-[2px] border-black hover:bg-greenShade cursor-pointer'>
              <p>Click to upload an image</p>
            </div>}

            {cardImage !== '' && <img src={cardImage}/>}
        </div>

        <div className='mt-5'>
            <p>Level of the Puzzle</p>
            <input className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='Easy, Intermediate, Hard'/>
        </div>

        <div className='mt-5'>
            <p>Time for solving each picture</p>
            <input type='number' className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='Between 10 & 30 seconds'/>
        </div>

        <div className='mt-5'>
            <p>It's Time to add the pictures!</p>
        </div>

        <div>
          {pictures.map((item, index) => {
            return (
              <>
              <AddPicture key={index} index={index} item={item}/>
              {
                index ? 
                <div className="mt-2 flex justify-start items-center">
                  <button type="button"  className="bg-red-400 text-white w-[30px] h-[30px] flex justify-center items-center" onClick={() => removePicture(index)}>x</button> 
                  <p className='text-[12px] ml-3'> Remove </p>
                </div>
                : null
              }
              </>
            )
          })}
        </div>
        <div className="mt-2 flex justify-end items-center">
          <p className='text-[12px] mr-3'> Add more </p>
          <button className="bg-greenShade w-[30px] h-[30px] flex justify-center items-center" type="button" onClick={() => addPicture()}>+</button>
        </div>

        <CustomButton text="Submit"/>
      </div>
    </Layout>
  )
}

export default AddPuzzle