"use client"
import { createContext, useState } from "react";
export const DataContext= createContext()

export const DataProvider=({children})=>{
    const [userName,setUserName]=useState("")
    const [gender,setGender]=useState("")

        return (
            <DataContext.Provider  value={{userName,setUserName,gender,setGender}}>
                {children}
            </DataContext.Provider>
        )
}