"use client"
import { DataProvider } from "./contextApi";
export const Providers=({children})=>{
    return (
        <DataProvider>  
            {children}
        </DataProvider>
    )
}