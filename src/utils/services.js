import database from "./firebase";
import axios from 'axios';
import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import Alert from './alert.js'
import alert from './alert.js'

const collectionReference = collection(database, "videos");

class DataService {
  async getAll() {
    const documents = [];

    // Query the collection
    const snapshot = await getDocs(collectionReference);

    // Loop through the documents in the query snapshot
    snapshot.forEach(doc => {
      // Extract the data from each document
      const data = doc.data();

      // Add the data to the array
      documents.push(data);
    });

    return documents;
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

  async delete(id) {
    try {
      await deleteDoc(doc(database, "videos", id));
      Alert.success('Video eliminado correctamente')
    } catch (e) {
      Alert.error('Error al eliminar el video : ', e);
    }
  }
}

export default new DataService();
