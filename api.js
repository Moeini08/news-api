 const searchForm = document.querySelector('.search');
  const input = document.querySelector('.control');
  const newsList = document.querySelector('.news-list');

  searchForm.addEventListener('submit' , retrieve)
  
  function retrieve(e){
  

  
      newsList.innerHTML = ''
  
      e.preventDefault()
  
      const apiKey = 'abffb63d48c842cbb7852e79737f894a'
      let topic = input.value;
      console.log(topic)
      let url = 'https://newsapi.org/v2/everything?q='+topic+'&apiKey='+apiKey+''
  
      fetch(url)
      .then((res)=>{
          return res.json()
      })
      .then((data)=>{
          console.log(data)
          data.articles.forEach(article =>{
              let span = document.createElement('span');
              let aa = document.createElement('a');
              let pp = document.createElement('p');
              let imge = document.createElement('img');
              aa.setAttribute('href', article.url);
              aa.setAttribute('target' , '_blank');
              imge.setAttribute('src', article.urlToImage);
              imge.setAttribute("width","800rem");
              pp.textContent = article.title;
              aa.textContent = article.url;
              imge.src = article.urlToImage;
              span.appendChild(imge);
              span.appendChild(aa);
              span.appendChild(pp);
              newsList.appendChild(span);
          })
      }).catch((error)=>{
          console.log(error) 
      })
  
      
  }