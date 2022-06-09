import { useNavigate } from "react-router-dom"

const ClientList = ({client}) => {
    const {clientName, company, email, phone, notes, id} = client

    const navigate= useNavigate()
  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3'>
            {clientName}
        </td>
        <td className='p-3'>
            <p><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
            {phone&&(
                <p><span className='text-gray-800 uppercase font-bold'>Phone number: </span>{phone}</p>
            )}
            
        </td>
        <td className='p-3'>
            {company}
        </td>
        <td className='p-3'>
        <button 
                type="button"
                className='bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs cursor-pointer'
                onClick={() => navigate(`/clients/${id}`)}
                >
                View
            </button>

            <button 
                type="button"
                className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs cursor-pointer mt-3'>
                Edit
            </button>

            <button 
                type="button"
                className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs cursor-pointer mt-3'>
                Delete
            </button>
        </td>
    </tr>
  )
}

export default ClientList