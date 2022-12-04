import database from "./firebase";
import axios from 'axios';
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const collectionReference = collection(database, "videos");

class DataService {
  async getAll() {
    const querySnapshot = await getDocs(collectionReference);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  async validateUnique(id) {
    const querySnapshot = await getDocs(query(collectionReference, where('id', '==', id)));
    if (querySnapshot.size === 0) {
      await this.getYoutubeData(id);
      return true;
    } else {
      console.log(querySnapshot.size);
      console.log('Esto ya existe');
    }
  }
  async getYoutubeData(id){
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyCPNimo2V3E8P0peKaoDMHWKIWsZYPsBow&part=snippet,contentDetails`;
    axios.get(url).then((response) => {
      const videoData = response.data.items[0];
      this.create(videoData);
    })
  }
  async create(videoData) {
    try {
      const data = {
        id: videoData.id,
        title: videoData?.snippet.title,
        time: videoData?.contentDetails.duration,
        thumbnail: videoData?.snippet.thumbnails.medium.url,
        description: videoData?.snippet.description,
      }
      await addDoc(collectionReference, data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // return db.add(video);
  }

  delete(id) {
    // return db.doc(id).delete();
  }
}

export default new DataService();
