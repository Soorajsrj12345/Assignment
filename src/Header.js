import {React,useState,useEffect} from 'react'
import './Header.css';

function Header() {
       var [dataList,setData]=useState([])

       const fetchData=async()=>{
           const result=await fetch('/Data.json')
           result.json().then(data=>{
            setData(data.Data)
           })
       }
    
    
       useEffect(()=>{
        fetchData()
       },[])
    

  return (
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
         
          <li class="nav-item dropdown">
<h3>
                  <a class="nav-link dropdown-toggle text-white text-center fs-3 " style={{backgroundColor:'greenyellow',width:'20rem'}} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SHOP BY CATEGORY </a>
    
</h3>          
                <ul class="dropdown-menu" style={{height:'50rem',width:'20rem'}} aria-labelledby="navbarDropdownMenuLink">
              
{                 
       dataList.map(item=>(
        <li class="dropdown-submenu border-bottom "><a class="dropdown-item " href="#">{item.name}</a>
        <ul class="dropdown-menu" style={{backgroundColor:'#f6f6f4',height:'50rem',width:'25rem'}}>
          
            <li class="dropdown-submenu"><a class="dropdown-item" href="#">{item.a}</a>
            
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>
                    <li><a class="dropdown-item" href="#"></a></li>
                </ul>
            </li>
            <li class="dropdown-submenu"><a class="dropdown-item " href="#">{item.b}</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>

                </ul>
            </li>
            <li class="dropdown-submenu"><a class="dropdown-item " href="#">{item.c}</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>

                </ul>
            </li>
            <li class="dropdown-submenu"><a class="dropdown-item " href="#">{item.d}</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>

                </ul>
            </li>
            <li class="dropdown-submenu"><a class="dropdown-item " href="#">{item.e}</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>

                </ul>
            </li>
            <li class="dropdown-submenu"><a class="dropdown-item " href="#">{item.f}</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>

                </ul>
            </li>
            <li class="dropdown-submenu"><a class="dropdown-item " href="#">{item.g}</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"></a></li>

                </ul>
            </li>



        </ul>
    </li> )) }          
    </ul>
          </li>
      <li class = "nav-item">
      <a class ="nav-link text-black fs-3" href="#"> <i style={{color:"red"}} class="fa-solid fa-tag fs-2"></i>
OFFERS </a>
      </li>
      </ul>
  </div>
</nav>
    </div>
  );
}

export default Header