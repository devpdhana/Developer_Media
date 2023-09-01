import { useState,useEffect } from "react"
import axios from "axios"
const useAxiosFetch = (dataURL) => {
    const [data,setData] = useState([])
    const [fetchError,setFetchError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    useEffect( ()=>{

        let isMounted = true
        const source = axios.CancelToken.source()
        const fetchPost = async(url)=>{
            setIsLoading(true)
            try{
                const response = await axios.get(url,{CancelToken : source.token})
                if(isMounted){
                    setData(response.data)
                    setFetchError(null)
                }
    
            } catch(err){
                // if (isMounted){
                //     if (error.response){
                //         console.log(error.response.data)
                //         console.log(error.response.status)
                //         console.log(error.response.headers)
                //         setFetchError(error.message)
                //         setData([])
                //     }else {
                //         console.log(error.message)
                //         setFetchError(error.message)
                //         setData([])
                //     }
                // }
                console.log(err.message)
                setFetchError(err.message)
                setData([])
                
            }finally{
                isMounted && setTimeout(()=>setIsLoading(false),2000)
    
            }
        }
        fetchPost(dataURL)

        const clean = ()=>{
            isMounted = false
            source.cancel()
        }

        return clean
        
    },[dataURL])
  return (
    {data,fetchError,isLoading}
  )
}
export default useAxiosFetch