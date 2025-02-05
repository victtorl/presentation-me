import { defineStore } from "pinia";

interface Iarticle{

}



export const useBlogtStore=defineStore("blog-store",() => {
 


  //article 
  const article=ref<string>(cargararticleLocalStorage());
  function setarticle(data:any){
    article.value=data
    guardararticleLocalStorage()
   }
   function limpiararticle(){
    article.value=''
    guardararticleLocalStorage()
   }

  function cargararticleLocalStorage(): string {
    const storearticle = localStorage.getItem('blog-article');
    return storearticle ? JSON.parse(storearticle) : '';
  }
  function guardararticleLocalStorage() {
    localStorage.setItem('blog-article', JSON.stringify(article.value));
  }





  return {

        article,
        setarticle,
        limpiararticle,
    

  }
  
})