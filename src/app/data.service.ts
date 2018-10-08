import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    // getUser() {
    //   // return this.http.get('https://jsonplaceholder.typicode.com/users');
    //   return this.http.get('../assets/jsonData/userData.json');
    // }

    getUser(userId) {
      // return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
      // 'if i pass the userId with the url getting the error need
      // to check   once i click the user link it should show me the user details but am getting the error'

      // return this.http.get('https://jsonplaceholder.typicode.com/users');
      // return this.http.get('../assets/jsonData/userData.json');

      // return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
      return this.http.get('../assets/jsonData/userData.json');
    }

    getPosts() {
      // return this.http.get('https://jsonplaceholder.typicode.com/posts');
      return this.http.get('../assets/jsonData/userDataPosts.json');
    }


}


// Check online or offline
// online and offline
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ConnectionService } from 'ng-connection-service';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   status = 'CHECK';
//   isConnected = true;

//   constructor(private http: HttpClient, private connectionService: ConnectionService) {
//     this.connectionService.monitor().subscribe(isConnected => {
//       this.isConnected = isConnected;
//       if (this.isConnected) {
//         this.status = "ONLINE";
//       }
//       else {
//         this.status = "OFFLINE";
//       }
//     })
//   }

//   getUsers() {
//     console.log(this.status);
//     if (this.status === 'ONLINE'){
//       return this.http.get('https://jsonplaceholder.typicode.com/users')
//     } else {
//       return this.http.get('./assets/users.json/')
//     }
//   }

//   getUser(userId) {
//     if (this.status === 'ONLINE'){
//       return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
//     } else {
//       return this.http.get('./assets/user.json')
//     }
//   }

//   getPosts() {
//     if (this.status === 'ONLINE'){
//       return this.http.get('https://jsonplaceholder.typicode.com/posts')
//     } else {
//       return this.http.get('./assets/posts.json/')
//     }
//   }

// }
