import { PageWelcome } from "../Pages/welcome";

const routes=[
  {
  path: /\/welcome/,
  component:PageWelcome,
  },
  // {
  // path: /\/step-1/,
  // component:,
  // },
  // {
  // path: /\/thankyou/,
  // component:,
  // },
];

export function initRouter(container:Element){
 
  function goTo(path){
    history.pushState({},"",path);
    HandleRoute(path)
  }
 
  function HandleRoute(route){
    console.log("el handleroute recibio una nueva ruta", route)

    for(const r of routes){
    if(r.path.test(route)){
      const el= r.component({goTo:goTo});
    
    if(container.firstChild){
      container.firstChild.remove();
    }
    container.appendChild(el)
    } 
   }
  }

  if(location.pathname){
    goTo("/welcome")
  }
  else{
    HandleRoute(location.pathname)
  }
  
  window.onpopstate=function(){
    HandleRoute(location.pathname)
  }
  
 }