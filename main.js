// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const openDrawer = document.getElementById("open-drawer");
    const closeDrawer = document.getElementById("close-drawer");
    const drawer = document.getElementById("drawer");
  
    // Open Drawer
    openDrawer.addEventListener("click", () => {
      drawer.classList.add("open");
    });
  
    // Close Drawer
    closeDrawer.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  
    // Optional: Close drawer when clicking outside
    window.addEventListener("click", (e) => {
      if (!drawer.contains(e.target) && e.target !== openDrawer) {
        drawer.classList.remove("open");
      }
    });
  });

window.onload = function loaddata(){
  const nav = document.getElementById('body');
  nav.style.opacity = 1;
  // nav.style.transform = "scale(1)"
}


  
const dark = () => {
  const main = document.getElementById('main');
  const body = document.getElementById('body')
  const darkmode = document.getElementById('DarkMode')

  const open_drawer = document.getElementById('open-drawer');
  const close_drawer = document.getElementById('close-drawer');
  const drawer = document.getElementById('drawer');
  const drawer_elements = document.getElementsByClassName('drawer-element')

  const bg_spaces = document.getElementsByClassName('bg_spaces');

  const logo_article = document.getElementById('logo_article')
  const logos = document.getElementsByClassName('logo')
  const logo_headings = document.getElementsByClassName('logo_heading')
  const logo_paragraphs  = document.getElementsByClassName('logo_paragraph')

  const article_frame = document.getElementById('article_frame')
  const article_title  = document.getElementById('article_title')
  const article_paragraph = document.getElementById('article_paragraph')

  const cards_titles = document.getElementsByClassName('cards_title')
  const card_bodys = document.getElementsByClassName('card_body');
  const cards_paragraphs = document.getElementsByClassName('cards_paragraph')

  const ending_title = document.getElementById('ending-title')
  const ending = document.getElementById('ending')
  const ending_paragraph  = document.getElementById('ending-paragraph')

  const footer = document.getElementById('footer')
  const Footer_info = document.getElementById('Footer_info')
  const footer_elements = document.getElementsByClassName('footer_element');
  const footer_titles = document.getElementsByClassName('footer_title');

  
  if(body.style.backgroundColor == "white")
  {
    main.style.background = 'none'
    body.style.backgroundColor = "#322e2e"
    body.style.color = "white"
    darkmode.style.color = "orange"
    darkmode.classList.replace('fa-moon','fa-sun')
    article_title.style.color = 'white'
    open_drawer.style.color = "white"
    close_drawer.style.color = "white"
    drawer.style.backgroundColor = "#322e2e"

    for(let drawer_element of drawer_elements)
    {
      drawer_element.style.color = "white"
    }



    for(let drawer_element of drawer_elements)
      {
        drawer_element.addEventListener("mouseover",()=>{
          drawer_element.style.color = "aqua"
        })
      }
      for(let drawer_element of drawer_elements)
        {
          drawer_element.addEventListener("mouseout",()=>{
            drawer_element.style.color = "white"
          })
        }



    logo_article.style.backgroundColor = 'rgb(32 29 29)'

    for(let bg_space of bg_spaces )
      {
bg_space.style.backgroundColor = 'rgb(32 29 29)'
      }

      for(let logo_heading of logo_headings)
      {
        logo_heading.style.color = 'white'
      }
    
      for(let logo_paragraph of logo_paragraphs)
        {
          logo_paragraph.style.color = 'white'
        }

    for(let cards_title of cards_titles)
    {
      cards_title.style.color = "white"
    }

    for(let card_body of card_bodys)
    {
      card_body.style.backgroundColor = '#000000c4'
    }

    for(let logo of logos){
      logo.style.color = 'black'
    }

    for(let logo of logos){
      logo.addEventListener("mouseover",()=>{
        logo.style.backgroundColor = "white"
      })
    }

    article_frame.style.backgroundColor = 'rgb(19 18 18)'
    article_paragraph.style.color = 'white'
    ending_title.style.color = 'white'
    ending.style.backgroundColor = '#322e2e'
    ending_paragraph.style.color = 'white'
    for(let cards_paragraph of cards_paragraphs)
    {
      cards_paragraph.style.color = "white"
    }
    footer.style.backgroundColor = '#dee3e754';
    Footer_info.style.color = "white"
    for(let footer_title of footer_titles){
      footer_title.style.color = 'white'
    }
    for(let footer_element of footer_elements){
      footer_element.style.color = "white"
    }
    
  }
  else
  {
    body.style.backgroundColor = "white"
    darkmode.classList.replace('fa-sun','fa-moon')
    body.style.color = "black"
    darkmode.style.color = "#f9af00"
    logo_article.style.backgroundColor = 'transparent'
    open_drawer.style.color = "black"
    close_drawer.style.color = "black"
    drawer.style.backgroundColor = "white"

    for(let drawer_element of drawer_elements)
      {
        drawer_element.style.color = "black"
      }

      for(let drawer_element of drawer_elements)
        {
          drawer_element.addEventListener("mouseout",()=>{
            drawer_element.style.color = "black"
          })
        }

    for(let bg_space of bg_spaces )
      {
bg_space.style.backgroundColor = 'transparent'
      }

    for(let logo_heading of logo_headings)
      {
        logo_heading.style.color = '#4f4c4c'
      }

    for(let cards_title of cards_titles)
      {
        cards_title.style.color = "#4f4c4c"
      }

      for(let card_body of card_bodys)
        {
          card_body.style.backgroundColor = '#ffffffd4'
        }

        for(let cards_paragraph of cards_paragraphs)
          {
            cards_paragraph.style.color = "gray"
          }
      
          for(let logo of logos){
            logo.style.color = 'black'
          }

    for(let logo of logos){
      logo.addEventListener("mouseout",()=>{
        logo.style.backgroundColor = "transparent"
      })
    }

    for(let logo of logos){
      logo.addEventListener("mouseover",()=>{
        logo.style.backgroundColor = "aqua"
      })
    }

    article_frame.style.backgroundColor = '#dee3e754'
    article_title.style.color = '#4b4545'
    article_paragraph.style.color = 'gray'
    ending_title.style.color = '#4f4c4c'
    ending.style.backgroundColor = 'transparent'
    footer.style.backgroundColor = 'rgb(243, 243, 243)'
    ending_paragraph.style.color = 'gray'
    Footer_info.style.color = "#645e5e"
    for(let footer_title of footer_titles){
      footer_title.style.color = '#4f4c4c'
    }
    for(let footer_element of footer_elements){
      footer_element.style.color = "gray"
    }
    for(let logo_paragraph of logo_paragraphs)
      {
        logo_paragraph.style.color = 'gray'
      }
  }
  
}


const darkmode = document.getElementById('DarkMode')
darkmode.addEventListener('click',dark)