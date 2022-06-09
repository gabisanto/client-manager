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

  const handleDelete = async id => {
    const confirmation = confirm('Are you sure you want to delete?')
    if(confirmation) {
      try {
        const url = `http://localhost:4000/clients/${id}`
        const response = await fetch (url,{
          method: 'DELETE',
          })
          await response.json()
          //now i have to update the state
          const clientsArray= clients.filter(client => client.id !== id)
          setClients(clientsArray)
      } catch (error) {
        console.log(error)
      }
    }

  }

  //handleDelete here because i have setClients and I need the deleted client to disappear from dom as well as the server

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
                  handleDelete={handleDelete}
                />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Start

