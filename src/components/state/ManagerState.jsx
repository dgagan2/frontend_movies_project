import React, { useEffect } from 'react'
import Spinner from '../Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import FormRoleORState from '../users/FormRoleORState'
import { resetState, stateList } from '../../features/state/stateSlice'

const ManagerState = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess, message, isSuccessUpdateRole } = useSelector((state) => state.state)
  const updateList = () => {
    dispatch(stateList())
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

    dispatch(resetState())
  }, [isError, isSuccess, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <article>
        <div className='container-form-role'>
          <FormRoleORState nameModule='Estado' />
        </div>
      </article>

    </>
  )
}

export default ManagerState
