import database from "./firebase";
import axios from 'axios';
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import Alert from './alert.js'
import alert from './alert.js'

const collectionReference = collection(database, "videos");

class DataService {
  async getAll() {
    const querySnapshot = await getDocs(collectionReference);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  async validateUnique(id) {
    const queryResult = await getDocs(query(collectionReference, where('id', '==', id)));
    queryResult.size === 0 ? await this.getYoutubeData(id) : Alert.error('Este video ya se encuentra en tu album de videos');
  }
  async getYoutubeData(id){
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyCPNimo2V3E8P0peKaoDMHWKIWsZYPsBow&part=snippet,contentDetails`;
    axios.get(url).then((response) => this.create(response.data.items[0]))
                  .catch((error) => alert.error(error))
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
      Alert.success('Video agregado correctamente');
    } catch (e) {
      Alert.error('Error al agregar el video : ', e);
    }
  }

  delete(id) {
    // return db.doc(id).delete();
  }
}

export default new DataService();
