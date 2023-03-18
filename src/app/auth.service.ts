import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { database } from 'src/assets/data/data';
import{ Auth,
  signInWithEmailAndPassword,
createUserWithEmailAndPassword,
signOut } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { doc,setDoc } from '@firebase/firestore';
import { addDoc,collection,collectionData,Firestore,getDoc,getFirestore,onSnapshot } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  userId:any;
  db:any=getFirestore()
  userData:any;
  constructor(private router:Router,private auth:Auth,private firestore:Firestore) { }
//register
register(creds:any)
{
  createUserWithEmailAndPassword(this.auth,creds.email,creds.password).then(
    ()=>
    {
      this.userId=this.auth.currentUser?.uid;
      const userDetails={
        uid: this.userId,
        name:creds.name,
        email:creds.email,
        password:creds.password,
        repassword:creds.repassword
      };
      const docRef=collection (this.firestore,'users');
      addDoc(docRef,userDetails)
      .then(()=>{})
      .catch((err)=>console.log(err.message));
alert('User created successfully');
this.router.navigate(['']);
    },
    (err)=>{
      alert('something went wrong');
      this.router.navigate(['/signup'])
    }
    );
    }




    insertData(docRef:any,data:any){
      addDoc(docRef,data)
      .then(()=>{alert("sucessfull")})
    
      .catch((err) => alert(err))
    
    }


    login(email:string,password:string)
    {
      signInWithEmailAndPassword(this.auth,email,password).then(
        ()=>{
          localStorage.setItem('email',email);
          this.userId=this.auth.currentUser?.uid;
          console.log(this.userId);
          localStorage.setItem('isLogged',JSON.stringify(true))
          this.router.navigate(['/garages']);
        },
        (err)=>{
          alert('Something went wrong, please try again.');
          this.router.navigate(['/login']);
        }
      );
  
    }


    logout()
  {
    signOut(this.auth).then(
      ()=>{
        localStorage.removeItem('email');
        this.router;
        localStorage.removeItem('isLogged');
        this.router.navigate(['/login']);
      },
      (err)=>{
        alert('something went wrong');
      }
    );

  }


  isLogged(){
    const user=JSON.parse(localStorage.getItem('isLogged')|| 'false')
    if(user){
    return true
    }
    else{
    return false
    }
    }

}  




