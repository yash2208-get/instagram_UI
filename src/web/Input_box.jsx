import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
import React from 'react'
import { AuthContext } from '../Context_API/AuthContext';
import { useContext, useEffect, useState } from "react"
import { setDoc, doc, } from "firebase/firestore"
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore";
import Post_add from './Post_add';
// import { useState } from 'react'
const Input_box = () => {
  let cUser = useContext(AuthContext);
  let [posting,setPosting]=useState([]);
  let arr=[];
  useEffect(async () => {
    
    const querySnapshot = await getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {

      console.log(doc.id, " => ", doc.data());
      arr.push({id:doc.id,...doc.data()})
    });
    setPosting(arr);
        console.log(posting);
        // console.log("Hello");
  },[])
  return (
    <>
      <div className='input_box_'>
        <div className="input-group  flex-nowrap">
          <input type="file" className="form-control" onClick={(e) => {
            console.log(e)
          }}
            onChange={(e) => {
              let vedioObj1 = e.currentTarget.files[0];
              let { type, name, size } = vedioObj1
              let typ = type.split("/")[0];
              if (typ !== "video") {
                alert("Please upload a video");
              }
              else {
                const storageRef = ref(storage, "img" + `${name}`)
                console.log(storageRef)
                const uploadTask = uploadBytesResumable(storageRef, vedioObj1)
                uploadTask.on('state_changed',
                  (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                      case 'paused':
                        console.log('Upload is paused');
                        break;
                      case 'running':
                        console.log('Upload is running');
                        break;
                    }
                  },
                  (error) => {
                  },
                  () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                      console.log('File available at', downloadURL);
                      console.log(cUser);
                      await setDoc(doc(db, "post", cUser.uid + `${name}`), {
                        email: cUser.email,
                        url: downloadURL,
                        likes: [],
                        comments: []
                      });
                    });
                  }
                );
              }
            }
            }
          ></input>
        </div>
      </div>
      {posting.map((post) => {
                        return <Post_add key={post} data={post} />
                    })}

    </>
  )
}
export default Input_box