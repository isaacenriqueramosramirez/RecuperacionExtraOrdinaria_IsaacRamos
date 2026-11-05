import {UseState,UseEffect, useState, useEffect} from 'react';
export default function useFetchData (url){
    const [data , SetData]= useState ([]);
    const [loading,setLoading]= useState (true;
        useEffect (() =>{
            const SetData = async ()=> {
                try{
                    const response = await fetch (url);
                    const json = await response.json();
                    SetData (json);
                }catch (error){ 
                    console.log(error);
                }
                setLoading(false);
                };
                getData();
            },[url]);

              return {data,loading};
                
            }
        
        