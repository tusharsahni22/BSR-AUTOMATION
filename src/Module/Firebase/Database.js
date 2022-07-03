import { getDatabase, ref ,set,get } from "firebase/database";
const db = getDatabase();

export default function writeUserData(userId, name, imageUrl) {
    set(ref(db, 'images/' + userId), {
      description : name,
      profile_picture : imageUrl
    });
  }

let ImageData = {}

export function readUserData(){
  try{
    get(ref(db),"images/").then((snap)=>{
      ImageData = snap.val()
    })
  }catch(e){
      console.log("data43",e)
    }
    console.log("data33 finish",ImageData)
  return ImageData 
  }