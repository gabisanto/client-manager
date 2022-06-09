import {useState,useEffect} from 'react'
import ClientList from '../components/ClientList'


const Start = () => {
  const [clients,setClients] = useState([])
  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = 'http://localhost:4000/clients'
        const response = await fetch(url)
        const result = await response.json()
        setClients(result)
      } catch (error) {
        console.log(error)
      }
    }
    getClientsAPI()
  }, [])

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
      <p className='mt-3'>Manage your clients</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className='bg-blue-800 text-white'>
          <tr>
              <th className='p-2'>Name</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Company</th>
              <th className='p-2'>Accions</th>
          </tr>
          
        </thead>

        <tbody>
          {
            clients.map(client => (
                <ClientList
                  key={client.id}
                  client={client}
                />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Start

