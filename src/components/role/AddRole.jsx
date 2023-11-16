import React, { useEffect } from 'react'
import Spinner from '../Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { roleList, reset } from '../../features/roles/roleSlice'
import { toast } from 'react-toastify'
import FormRoleORState from '../users/FormRoleORState'

const AddRole = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess, message, isSuccessUpdateRole } = useSelector((state) => state.rol)
  const updateList = () => {
    dispatch(roleList())
  }
  useEffect(() => {
    updateList()
  }, [dispatch, isSuccessUpdateRole])

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }

    if (isSuccess) {
      message && toast.success(message)
    }

    dispatch(reset())
  }, [isError, isSuccess, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <article>
        <div className='container-form-role'>
          <FormRoleORState nameModule='Rol' />
        </div>
      </article>

    </>
  )
}

export default AddRole
