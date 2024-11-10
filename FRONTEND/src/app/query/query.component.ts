import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  userQuery: string = '';
  chatMessages: { sender: string, message: string }[] = []; // Track sender and message
  isLoading = false;

  async sendQuery() {
    if (this.userQuery.trim()) {
      // Push user's query to the chat messages
      const temp=this.userQuery;
      this.userQuery="";
      
      this.chatMessages.push({ sender: 'User', message: temp });
      this.isLoading = true;

      try {
        const response = await axios.post('http://localhost:8000/chatbot', {
          query: temp
        });

        // Push bot's reply to the chat messages
        this.chatMessages.push({ sender: 'Suthradhar', message: response.data.response }); 
      } catch (error) {
        console.error('Error sending query:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
}
