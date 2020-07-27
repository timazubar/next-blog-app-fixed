import axios from 'axios';
import PostModel from '../models/PostModel';

export default class PostsService {
  private apiBase = 'https://simple-blog-api.crew.red';

  async getPosts(): Promise<PostModel[]> {
    const { data } = await axios.get(`${this.apiBase}/posts`);
    return data;
  }

  async getPostById(id: string): Promise<PostModel> {
    const { data } = await axios.get(`${this.apiBase}/posts/${id}`);
    return data;
  }

  sendPost(post: PostModel): void {
    axios.post(`${this.apiBase}/posts`, post);
  }

  updatePost(post: PostModel): void {
    axios.put(`${this.apiBase}/posts`, post);
  }
}
