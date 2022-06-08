import React from 'react'
import Alert from './Alert'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const FormClient = () => {

    const newClientSchema = Yup.object().shape({
                clientName: Yup.string()
                .required('Name is required').min(3,'Name is too short')
                .max(20,'Name is too long'),
                company: Yup.string()
                .required('Company is required'),
                email:Yup.string()
                .required('Invalid e-mail')
                .email('E-mail must be a valid e-mail'),
                phone: Yup.number().integer('Invalid number').positive('Invalid number').typeError('Invalid number'),
                  
    })
    const handleSubmit = (values) => {

    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Add client</h1>

        <Formik
            initialValues={{
                clientName:'',
                company: '',
                email:'',
                phone:'',
                notes:''
            }}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
            validationSchema={newClientSchema}
        
        >
            {/* errors comes from data, data has all the info about the form */}
            {({errors,touched}) => {
            
            
                return (
            <Form className="mt-10">
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor='clientName'>Name</label>
                    <Field
                        placeholder="Client name"
                        id='clientName'
                        type='text'
                        className="mt-2 block w-full p-3 bg-gray-50"
                        name='clientName'
                    />
                    {/* we could use <ErrorMessage name="clientName"/> to print the error but it doesn't allow styling*/}

                    {errors.clientName && touched.clientName ? (
                        <Alert>{errors.clientName}</Alert>
                    ) : null }
                </div>
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor='company'>Company</label>
                    <Field
                        placeholder="Company"
                        id='company'
                        type='text'
                        className="mt-2 block w-full p-3 bg-gray-50"
                        name='company'
                    />
                    {errors.company && touched.company ? (
                        <Alert>{errors.company}</Alert>
                    ) : null }
                </div>
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor='email'>Email</label>
                    <Field
                        placeholder="Email"
                        id='email'
                        type='email'
                        className="mt-2 block w-full p-3 bg-gray-50"
                        name='email'
                    />
                    {errors.email && touched.email ? (
                        <Alert>{errors.email}</Alert>
                    ) : null }
                </div>
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor='phone'>Phone number (optional)</label>
                    <Field
                        placeholder="Company"
                        id='phone'
                        type='tel'
                        className="mt-2 block w-full p-3 bg-gray-50"
                        name='phone'
                    />
                    {errors.phone && touched.phone ? (
                        <Alert>{errors.phone}</Alert>
                    ) : null }
                </div>
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor='notes'>Additional notes (optional)</label>
                    <Field
                        as="textarea"
                        placeholder="Additional notes"
                        id='notes'
                        type='text'
                        className="mt-2 block w-full h-40 p-3 bg-gray-50"
                        name='notes'
                    />
                </div>
                <input type="submit" value="Add client" className="mt-5 w-full p-3 text-white uppercase font-bold text-lg bg-blue-800"/>
            </Form>
            )}}
        </Formik>
    </div>
  )
}

export default FormClient