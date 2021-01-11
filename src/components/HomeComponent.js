import React, { useEffect, useState } from "react";
import Loader from "./LoaderComponent";
import Profile from "./ProfileComponent";

function Home({error, localRecords, records}){
    const [loading, setLoading ] = useState(false);
    

    useEffect(async ()=> {
        setTimeout(()=>{
            setLoading(true)
        }, 2000)
    //eslint-disable-next-line
    }, [])

    

    const onSearch = (e)=>{
        var listItems = document.querySelectorAll(".item");
        var error = document.querySelector(".error");
        var searchBox = document.querySelector(".search");

       

        const matchText = (textEntered, listItem) =>{
            var textToMatch =  new RegExp(`${textEntered.toLowerCase()}`);
            var report = textToMatch.test(listItem.toLowerCase());
        
            return report
        }

        const displayResult = () => {
            listItems.forEach(each =>{
               const isAMatch = matchText(e.target.value, each.innerText)
              if(isAMatch){
                  each.parentElement.style.display = "block";
              }else{
                  each.parentElement.style.display = "none"
              }
            })
        }
    
        const showListItems = () =>{
            listItems.forEach(each => {
                each.parentElement.style.display = "block";
            })
        }
        
        if(e.target.value == ""){
            showListItems()
        }
        else{
            displayResult()
        }

        // listItems.forEach(item =>{
        //     console.log(item.parentElement)
        // })
    }
    
    if(loading){
        return(
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 hide-on-med-and-down">
                            <div className="row">
                                <div className="col s12 m12 l12">
                                    <nav>
                                        <div className="nav-wrapper">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" className="search" type="search" required placeholder="Search records" onChange={(e)=>onSearch(e)}/>
                                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                                    <i className="material-icons">close</i>
                                                </div>
                                            </form>

                                        </div>
                                    </nav>
                                    <p className="error red-text" style={{display: "none"}}>This is an error</p>
                                </div> 
                                

                                <Profile error={error} localRecords={localRecords} records/>
                            </div>
                        </div>
                        <div className="col s12 m12 l12 show-on-med-and-down hide-on-large-only">
                            <div className="row">
                                <div className="col s12 m12 l12">
                                    <nav>
                                        <div className="nav-wrapper">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" className="search" type="search" required placeholder="Search records" onChange={(e)=>onSearch(e)}/>
                                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                                    <i className="material-icons">close</i>
                                                </div>
                                            </form>
                                            
                                        </div>
                                    </nav>
                                    <p className="error red-text" style={{display: "none"}}>This is an error</p>
                                </div> 
                                

                                <Profile error={error} localRecords={localRecords} records/>
                            </div>
                        </div>
                        <div className="col s12 m4 l4 hide-on-med-and-down">
                            Filter
                        </div>
                    </div>
                       
                    <div className="row">
                        
                    </div>        
                        
            </div>
            
        )
    }else{
        return(
            <Loader />
        )
    } 
}

export default Home;