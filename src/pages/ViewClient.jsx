import { useParams } from "react-router-dom" //to read the id from params
import { useEffect,useState } from "react"
import Spinner from "../components/Spinner"

const ViewClient = () => {
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
loading ? <Spinner /> : Object.keys(client).length === 0 ? <p className='font-black text-4xl text-blue-900'>Client doesn't exist... yet!</p> : (

      
    <div>
        
            <>
        
        <h1 className='font-black text-4xl text-blue-900'>View client: {client.clientName}</h1>
      <p className='mt-3'>Full information about the selected client</p>
        <p className="text-2xl text-gray-700 mt-10">
            <span className=" uppercase font-bold">Client: </span>{client.clientName}
        </p>
        <p className="text-2xl text-gray-700 mt-3">
            <span className=" uppercase font-bold">E-mail: </span>{client.email}
        </p>
        {client.phone&&(
            <p className="text-2xl text-gray-700 mt-3">
            <span className=" uppercase font-bold">Phone number: </span>{client.phone}
        </p>
        )}
        
        <p className="text-2xl text-gray-700 mt-3">
            <span className=" uppercase font-bold">Company: </span>{client.company}
        </p>
        {client.notes&&(
            <p className="text-2xl text-gray-700 mt-3">
            <span className=" uppercase font-bold">Additional notes: </span>{client.notes}
        </p>
        )}
        </>
        
    </div>
    )
  )
}

export default ViewClient