import FormClient from '../components/FormClient'
import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom'

const EditClient = () => {
  const [client,setClient] = useState([])
    const [loading,setLoading] = useState(true)
    const {id}=useParams()
    useEffect(() => {
        // setLoading(!loading)
        const GetClientAPI = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`
                const response = await fetch (url)
                const result = await response.json()
                setClient(result)
            } catch (error) {
                console.log(error)
            }
            // I wanted to see if the spinner was working so I set a timeout ^^
            // setTimeout(() => {
            //     setLoading(!loading)
            // }, 1500);
            setLoading(!loading)
        }
        GetClientAPI()
    },[])
  return (
    <>
    {client?.clientName ? 
    (
      <><h1 className='font-black text-4xl text-blue-900'>Edit client: {client.clientName}</h1>
      <p className='mt-3'>Change any information you need</p>
  
      <FormClient 
        client={client}
        loading={loading}
      /></>
    ) : <h1 className='font-black text-4xl text-blue-900'>Client doesn't exist</h1>}
    
  </>
  )
}

export default EditClient